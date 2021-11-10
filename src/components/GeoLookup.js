import React, { Component } from 'react'

export class GeoLookup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLocation: props.userLocation,
      userRadius: props.userRadius,
      showForm: false,
      search: ''
    }
    this.showSearchForm = this.showSearchForm.bind(this);
    this.setValue = this.setValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.useMyLocation = this.useMyLocation.bind(this);
    this.getDistance = props.onUpdate;
  }
  showSearchForm() {
    this.setState({ showForm: !this.state.showForm })
  }
  setValue(event) {
    this.setState({ search: event.target.value})
  }
  handleSubmit(event) {
    this.showSearchForm();
    this.getDistance(event);
  }
  useMyLocation() {
    this.getDistance(this.state.userLocation);
    this.setState({ search: '' });
    this.showSearchForm();
  }
  render() {
    const { userLocation, userRadius, showForm, search } = this.state;
    if(userLocation && !showForm) {
      let location = 'my location'
      if (search) location = search;
      return (
        <div className="search-results">
          <p>Showing results within {userRadius} mi of {location}</p>
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
