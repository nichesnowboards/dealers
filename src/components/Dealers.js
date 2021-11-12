import React, { Component } from 'react'
import axios from 'axios'
import './Dealers.css'
import GeoLookup from './GeoLookup'
import Map from './Map'
import {appendScript} from '../utils.js'

const MAPS_API_KEY = 'AIzaSyBqv3DuV0eHjDCdOS48ltt62fYjfv55_YQ'

function DealerInfo({dealer}) {
  if (!dealer.website) {
    return (
      <div>
        <h2>{dealer.title}</h2>
        <p>{dealer.street}, {dealer.city}, {dealer.state} {dealer.postal_code}</p>
        <p>{dealer.phone}</p>
      </div>
    )
  }
  return (
    <div>
      <h2>{dealer.title}</h2>
      <p>{dealer.street}, {dealer.city}, {dealer.state} {dealer.postal_code}</p>
      <p>{dealer.phone}</p>
      <div className="actions">
        <a href={dealer.website} target="_blank" rel="noreferrer" className="button">Website</a>
      </div>
    </div>
  )
}

export class Dealers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dealers: [],
      filteredDealers: [],
      isLoaded: false,
      search: '',
      userLocation: null,
      userRadius: 50
    }
    this.searchDealers = this.searchDealers.bind(this);
    this.initMap = this.initMap.bind(this);
    this.filterDealers = this.filterDealers.bind(this);
    this.dealerLocations = this.dealerLocations.bind(this);
    this.updateRadius = this.updateRadius.bind(this);
  }

  componentDidMount() {
    const restPrefix = 'https://nichesnowboards.com/wp-json'
    // const restPrefix = 'http://localhost:8000/?rest_route='

    this.getUserLocation();
    axios.get(`${restPrefix}/dealerlocator/v1/dealers/`)
      .then(res => {
        this.setState({
          dealers: res.data,
          isLoaded: false
        })
      })
      .catch(err => console.log(err))
      window.initMap = this.initMap;
      appendScript(`https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}&callback=initMap&v=weekly`)
  }

  initMap() {
    this.geocoder = window.google.maps.Geocoder;
    this.map = window.google.maps.Map;
  }

  geocoder() {}

  map() {}

   searchDealers(event) {
     if (event && event.target) {
       const form = new FormData(event.target);
       this.setState({search: form.get('search')});
       const geocoder = new this.geocoder();
       geocoder.geocode({'address':form.get('search')}, (res) => {
         console.log(res)
       })
       this.filterDealers(form.get('search'));
       event.preventDefault();
     } else {
       this.setState({search: ''});
     }
   }

   updateRadius(userRadius) {
     this.setState({ userRadius }, this.filterDealers)
   }

  getUserLocation() {
    if('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          userLocation: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          isLoaded: true
        }, this.filterDealers);
      }, (error) => {
        console.log(error)
        this.setState({ isLoaded: true })
      });
    } else {
      /* geolocation IS NOT available */
      this.setState({ isLoaded: true })
    }
  }

   filterDealers(query) {
     const { dealers, userRadius } = this.state;
     if (dealers.length) {
       this.setState({
         filteredDealers: dealers
          .map(this.dealerLocations)
          .sort(this.dealerDistance)
          .filter(({ distance }) => {
             return distance < (userRadius * 1.6)
           })
       });
     }
   }

   dealerLocations(d) {
     const { userLocation, search } = this.state;
     let location = userLocation;
     if (search) {
       location = ''
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
     if (Number(a.distance) < Number(b.distance)) {
       return -1;
     }
     if (Number(a.distance) > Number(b.distance)) {
       return 1;
     }
     return 0;
   }

   getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
     var R = 6371; // Radius of the earth in km
     var dLat = this.deg2rad(lat2-lat1);  // this.deg2rad below
     var dLon = this.deg2rad(lon2-lon1);
     var a =
       Math.sin(dLat/2) * Math.sin(dLat/2) +
       Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
       Math.sin(dLon/2) * Math.sin(dLon/2)
       ;
     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
     var d = R * c; // Distance in km
     return d;
   }

   deg2rad(deg) {
     return deg * (Math.PI/180)
   }

   render() {
      const {userLocation, userRadius, filteredDealers, isLoaded} = this.state;
      if (isLoaded) {
        return (
           <div className="dealers">
              <Map map={this.map} />
              <div className="list">
                <h1>Find A Dealer</h1>
                <GeoLookup userLocation={userLocation} userRadius={userRadius} onUpdate={this.searchDealers} updateRadius={this.updateRadius} />
               {filteredDealers.map(dealer =>
                 <div key={dealer.id} className="dealer">
                  <DealerInfo dealer={dealer} />
                 </div>
                )}
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
