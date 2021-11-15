import React, { Component } from 'react'
const ZOOM_RADIUS = {
  '50': 9,
  '100': 8,
  '200': 7,
  '500': 6
}
export class Map extends Component {
  constructor(props) {
    super(props);
    this.google = props.google;
    this.createMarker = this.createMarker.bind(this);
    this.updateZoom = this.updateZoom.bind(this);
    this.updateCenter = this.updateCenter.bind(this);
    this.state = {
      location: props.location || { lat: -34.397, lng: 150.644 },
      markers: props.markers,
      radius: props.userRadius
    }
  }
  componentDidMount() {
    this.map = new this.google.maps.Map(document.getElementById("map"), {
      center: this.state.location,
      zoom: ZOOM_RADIUS[this.state.radius],
    });
    this.setState({ markers: this.state.markers.map(this.createMarker) })
  }
  componentDidUpdate(prevProps) {
    if (this.props.location.lat !== prevProps.location.lat ||
        this.props.location.lng !== prevProps.location.lng) {
      this.setState({ location: this.props.location }, this.updateCenter)
    }
    if (this.props.markers.length !== prevProps.markers.length) {
      this.state.markers.forEach(marker => marker.setMap(null))
      this.setState({ markers: this.props.markers.map(this.createMarker) })
    }
    if (this.props.userRadius !== prevProps.userRadius) {
      this.setState({ radius: this.props.userRadius }, this.updateZoom)
    }
  }
  updateCenter() {
    this.map.setCenter(this.state.location)
  }
  updateZoom() {
    this.map.setZoom(ZOOM_RADIUS[this.state.radius])
  }
  createMarker({lat,lng}) {
    return new this.google.maps.Marker({
      position: {
        lat: Number(lat),
        lng: Number(lng)
      },
      map: this.map,
    });
  }
  render() {
    return (
      <div id="map"></div>
    )
  }
}

export default Map
