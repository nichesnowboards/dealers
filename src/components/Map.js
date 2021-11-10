import React, { Component } from 'react'

export class Map extends Component {
  constructor(props) {
    super(props);
    this.map = props.map;
  }
  componentDidMount() {
    new this.map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }
  render() {
    return (
      <div id="map"></div>
    )
  }
}

export default Map
