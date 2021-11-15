import React, { Component } from 'react'

export class Map extends Component {
  constructor(props) {
    super(props);
    this.map = props.map;
    this.state = {
      location: props.location || { lat: -34.397, lng: 150.644 }
    }
  }
  componentDidMount() {
    this.map = new this.map(document.getElementById("map"), {
      center: this.state.location,
      zoom: 8,
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.location.lat !== prevProps.location.lat ||
        this.props.location.lng !== prevProps.location.lng) {
      this.setState({ location: this.props.location }, this.updateCenter)
    }
  }
  updateCenter() {
    this.map.setCenter(this.state.location)
  }
  render() {
    return (
      <div id="map"></div>
    )
  }
}

export default Map
