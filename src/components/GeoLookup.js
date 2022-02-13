import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const RADIUS_OPT = [10,50,100,2000]
export class UserRadius extends Component {
  static propTypes = {
    userRadius: PropTypes.string,
    updateRadius: PropTypes.any,
  }
  constructor(props) {
    super(props);
    this.state = {
      showRadiusOpt: false,
      userRadius: props.userRadius
    }
    this.showOptions = this.showOptions.bind(this)
    this.selectOption = this.selectOption.bind(this)
    this.updateRadius = props.updateRadius
  }
  componentDidUpdate(prevProps) {
    if (this.props.userRadius !== prevProps.userRadius) {
      this.setState({ userRadius: this.props.userRadius })
    }
  }
  showOptions() {
    this.setState({ showRadiusOpt:!this.state.showRadiusOpt })
  }
  selectOption(value) {
    this.updateRadius(value);
    this.showOptions();
    this.setState({ userRadius: value })
  }
  render() {
    if (this.state.showRadiusOpt) {
      return (
        <div className="select-list">
          {RADIUS_OPT.map((value,i) =>
            <span key={i} onClick={this.selectOption.bind(this,value)}>{value}</span>
          )}
        </div>
      )
    }
    return (
      <div className="select-toggle">
        <button className="inline-link" onClick={this.showOptions}>{this.state.userRadius} <FontAwesomeIcon icon={faAngleDown} /></button>
      </div>
    )
  }
}
export class GeoLookup extends Component {
  static propTypes = {
    userRadius: PropTypes.string,
    userLocation: PropTypes.string,
    search: PropTypes.string,
    onUpdate: PropTypes.any,
    updateRadius: PropTypes.any,
  }
  constructor(props) {
    super(props);
    this.state = {
      userLocation: props.userLocation,
      userRadius: props.userRadius,
      showForm: true,
      search: props.search
    }
    this.showSearchForm = this.showSearchForm.bind(this);
    this.setValue = this.setValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.useMyLocation = this.useMyLocation.bind(this);
    this.getUserLocation = this.getUserLocation.bind(this);
    this.getDistance = props.onUpdate;
    this.updateRadius = props.updateRadius;
  }
  componentDidUpdate(prevProps) {
    if (this.props.userRadius !== prevProps.userRadius) {
      this.setState({ userRadius: this.props.userRadius })
    }
  }
  showSearchForm() {
    this.setState({ showForm: !this.state.showForm })
  }
  showRadiusOpt() {

  }
  setValue(event) {
    this.setState({ search: event.target.value})
  }
  handleSubmit(event) {
    this.showSearchForm();
    this.getDistance(event);
  }
  useMyLocation() {
    this.setState({ search: '' });
    this.showSearchForm();
    if (!this.state.userLocation) {
      this.getUserLocation()
    }
  }

 getUserLocation() {
   if('geolocation' in navigator) {
     navigator.geolocation.getCurrentPosition((position) => {
       const userLocation = {
         lat: position.coords.latitude,
         lng: position.coords.longitude
       }
       this.setState({ userLocation }, this.getDistance.bind(null, userLocation));
     }, (error) => {
       console.log(error)
     });
   }
 }
  render() {
    const { userRadius, showForm, search } = this.state;
    if(!showForm) {
      let location = 'my location'
      if (search) location = search;
      return (
        <div className="search-results">
          <div className="content">
            Showing results within
            <UserRadius userRadius={userRadius} updateRadius={this.updateRadius} />
            mi of {location}
          </div>
          <button onClick={this.showSearchForm} className="link">Change Location</button>
        </div>
      )
    }
    return (
      <div className="search">
        <form className="input-group" onSubmit={this.handleSubmit}>
          <input placeholder="Enter City, State or Zipcode" name="search" value={search} onChange={this.setValue}  />
          <button type="submit" className="button">Search</button>
        </form>
        <button onClick={this.useMyLocation} className="link">Use My Location</button>
      </div>
    )
  }
}

export default GeoLookup
