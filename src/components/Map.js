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
  componentDidUpdate() {
    this.map.setCenter(this.state.location);
  }
  render() {
    return (
      <div id="map"></div>
    )
  }
}

export default Map
