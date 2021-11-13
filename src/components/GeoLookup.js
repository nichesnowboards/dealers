import React, { Component } from 'react'

const RADIUS_OPT = [50,100,200,500]
export class UserRadius extends Component {
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
      <button className="inline-link" onClick={this.showOptions}>{this.state.userRadius}</button>
    )
  }
}
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
    this.updateRadius = props.updateRadius;
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