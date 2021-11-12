import React, { Component } from 'react'
import axios from 'axios'
import logo from '../logo.png';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faVimeoV, faInstagram } from '@fortawesome/free-brands-svg-icons'

export class Header extends Component {
  state = {
    name: '',
    description: '',
    isLoaded: false
  }
  componentDidMount () {
    const restPrefix = 'https://nichesnowboards.com/wp-json'
    // const restPrefix = 'http://localhost:8000/?rest_route='
    axios.get(`${restPrefix}/`)
        .then(res => this.setState({
            name: res.data.name,
            description: res.data.description,
            isLoaded: true
        }))
        .catch(err => console.log(err))
  }
  render() {
    return (
      <header>
        <div className="topbar">
          <span>{this.state.description}</span>
          <div className="social">
            <a className="icon" href="https://www.facebook.com/nichesnowboards" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a className="icon" href="https://www.instagram.com/nichesnowboards/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
            <a className="icon" href="https://vimeo.com/nichesnowboards" target="_blank"><FontAwesomeIcon icon={faVimeoV} /></a>
          </div>
        </div>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </header>
    )
  }
}

export default Header
