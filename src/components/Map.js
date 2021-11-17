import React, { Component } from 'react'
const ZOOM_RADIUS = {
  '10': 15,
  '50': 9,
  '100': 8,
  '200': 7,
  '500': 6,
  '2000': 3,
}
const mapStyle = [
    {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "weight": "2.00"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#9c9c9c"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#7b7b7b"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c8d7d4"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#070707"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    }
]
const iconBase = '/dealers/';
export class Map extends Component {
  constructor(props) {
    super(props);
    this.google = props.google;
    this.selectDealer = props.selectDealer;
    this.createMarker = this.createMarker.bind(this);
    this.updateZoom = this.updateZoom.bind(this);
    this.updateCenter = this.updateCenter.bind(this);
    this.showLocation = this.showLocation.bind(this);
    this.state = {
      location: props.location,
      markers: props.markers,
      radius: props.userRadius,
      selected: props.selected
    }
  }
  componentDidMount() {
    this.map = new this.google.maps.Map(document.getElementById("map"), {
      center: this.state.location,
      zoom: ZOOM_RADIUS[this.state.radius],
      styles: mapStyle
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
    if (this.props.selected !== prevProps.selected) {
      this.setState({ selected: this.props.selected }, this.showLocation)
    }
  }
  updateCenter(location) {
    this.map.setCenter(location || this.state.location)
  }
  updateZoom(zoom) {
    this.map.setZoom(zoom || ZOOM_RADIUS[this.state.radius])
  }
  showLocation() {
    const location = this.props.markers.find(m => Number(m.id) === Number(this.state.selected))
    this.updateCenter({ lat: Number(location.lat), lng: Number(location.lng) })
  }
  createMarker({lat,lng,id}, i) {
    const marker = new this.google.maps.Marker({
      position: {
        lat: Number(lat),
        lng: Number(lng)
      },
      icon: iconBase + 'map_pin.png',
      map: this.map,
    });
    marker.addListener('click', this.selectDealer.bind(null, {id,i}))
    return marker
  }
  render() {
    return (
      <div id="map"></div>
    )
  }
}

export default Map
