import React, { Component } from 'react'
import axios from 'axios'
import './Dealers.css'
import GeoLookup from '@libs/GeoLookup'
import Map from '@components/Map'
import { appendScript } from '@libs/utils.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin, faPhone, faAngleRight, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const MAPS_API_KEY = 'AIzaSyAItV-8HqS4WWMYd1txR8ppL06U_U2oZRU'

function DealerPhone({ dealer }) {
	if(!dealer.phone) {
		return ''
	}
	return (
		<p><span className="icon"><FontAwesomeIcon icon={faPhone} /></span> <a href={'tel:' + dealer.phone} className="inline-link">{dealer.phone}</a></p>
	)
}

function DealerWebsite({ dealer }) {
	if(!dealer.website) {
		return ''
	}
	return (
		<div className="actions">
      <a href={dealer.website} target="_blank" rel="noreferrer" className="button">Website</a>
    </div>
	)
}

export class DealerInfo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			dealer: props.dealer
		}
	}
	mapLink({ street, city, state, postal_code }) {
		const address = [street, city, state, postal_code].join(',')
		return `http://maps.google.com/?q=${address}`
	}
	render() {
		const dealer = this.state.dealer
		return (
      <div>
        <h2>{dealer.title}</h2>
        <p>
          <span className="icon">
            <FontAwesomeIcon icon={faMapPin} />
          </span>
          <a href={this.mapLink(dealer)} target="niche_ext">
            {dealer.street}, {dealer.city}, {dealer.state} {dealer.postal_code} <span><FontAwesomeIcon icon={faExternalLinkAlt} /></span>
          </a>
        </p>
        <DealerPhone dealer={dealer} />
        <DealerWebsite dealer={dealer} />
        <div className="caret">
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
		)
	}
}

export class Dealers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dealers: [],
			filteredDealers: [],
			isLoaded: false,
			search: '',
			location: { lat: 41.850033, lng: -87.6500523 },
			userLocation: null,
			userRadius: 2000,
			selectedDealer: null,
		}
		this.searchDealers = this.searchDealers.bind(this);
		this.initMap = this.initMap.bind(this);
		this.filterDealers = this.filterDealers.bind(this);
		this.dealerLocations = this.dealerLocations.bind(this);
		this.updateRadius = this.updateRadius.bind(this);
		this.selectDealer = this.selectDealer.bind(this);
		this.itemsRef = [];
	}

	componentDidMount() {
		const restPrefix = 'https://nichesnowboards.com/wp-json'
		// const restPrefix = 'http://localhost:8000/?rest_route='

		// this.getUserLocation();
		axios.get(`${restPrefix}/nichesnowboards/v1/dealers/`)
			.then(res => {
				this.setState({
					dealers: res.data,
				}, this.filterDealers)
			})
			.catch(err => console.log(err))
		window.initMap = this.initMap;
		appendScript(`https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}&callback=initMap&v=weekly`)
	}

	componentDidUpdate() {
		if(this.state.filteredDealers.length) {
			this.itemsRef.current = this.itemsRef.slice(0, this.state.filteredDealers.length);
		}
	}

	initMap() {
		this.google = window.google;
		this.gtag = window.gtag;
	}

	searchDealers(event) {
		if(event && event.target) {
			const form = new FormData(event.target);
			const geocoder = new this.google.maps.Geocoder();
			geocoder.geocode({ 'address': form.get('search') }, (res) => {
				const geo = res.map(({ formatted_address, geometry }) => {
					return {
						search: formatted_address,
						location: {
							lat: geometry.location.lat(),
							lng: geometry.location.lng()
						}
					}
				})
				this.setState(geo[0], this.filterDealers)
			})
			this.gtag("event", "search", form.get('search'))
			event.preventDefault();
		} else {
			this.setState({
				search: '',
				location: event,
				userRadius: 50
			}, this.filterDealers);
		}
	}

	updateRadius(userRadius) {
		this.setState({ userRadius }, this.filterDealers)
	}

	filterDealers(query) {
		const { dealers, userRadius } = this.state;
		if(dealers.length) {
			this.setState({
				filteredDealers: dealers
					.map(this.dealerLocations)
					.sort(this.dealerDistance)
					.filter(({ distance }) => {
						return distance < (userRadius * 1.6)
					}),
				isLoaded: true
			});
		}
	}

	selectDealer(dealer) {
		this.setState({
			selectedDealer: dealer.id,
			userRadius: 10
		})
		this.itemsRef[dealer.i].scrollIntoView()
	}

	dealerClass(id) {
		let className = 'dealer'
		if(id === this.state.selectedDealer) {
			className += ' selected'
		}
		return className
	}

	dealerLocations(d) {
		let { userLocation, location } = this.state;
		if(!location) {
			location = userLocation;
		}
		return {
			...d,
			distance: this.getDistanceFromLatLonInKm(
				Number(d.lat),
				Number(d.lng),
				location.lat,
				location.lng
			)
		}
	}

	dealerDistance(a, b) {
		if(Number(a.distance) < Number(b.distance)) {
			return -1;
		}
		if(Number(a.distance) > Number(b.distance)) {
			return 1;
		}
		return 0;
	}

	getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
		var R = 6371; // Radius of the earth in km
		var dLat = this.deg2rad(lat2 - lat1); // this.deg2rad below
		var dLon = this.deg2rad(lon2 - lon1);
		var a =
			Math.sin(dLat / 2) * Math.sin(dLat / 2) +
			Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
			Math.sin(dLon / 2) * Math.sin(dLon / 2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		var d = R * c; // Distance in km
		return d;
	}

	deg2rad(deg) {
		return deg * (Math.PI / 180)
	}

	render() {
		const { search, userLocation, location, userRadius, filteredDealers, isLoaded } = this.state;
		if(isLoaded) {
			return (
        <div className="dealers">
          <div className="content">
            <Map google={this.google} location={location || userLocation} markers={filteredDealers} userRadius={userRadius} selected={this.state.selectedDealer} selectDealer={this.selectDealer} />
            <div className="list">
              <h1>Find a Dealer</h1>
              <GeoLookup search={search} userRadius={userRadius} onUpdate={this.searchDealers} updateRadius={this.updateRadius} />
              {filteredDealers.map((dealer, i) =>
                <div key={dealer.id} className={this.dealerClass(dealer.id)} ref={el => this.itemsRef[i] = el} onClick={this.selectDealer.bind(this, {id:dealer.id, i})}>
                <DealerInfo dealer={dealer} />
                </div>
              )}
            </div>
          </div>
        </div>
			)
		} else {
			return (
				<div className="loading">Loading...</div>
			)
		}
	}
}

export default Dealers
