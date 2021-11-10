import React, { Component } from 'react'
import logo from '../logo.png';
import './Header.css'

export class Header extends Component {
  render() {
    return (
      <header>
        <img src={logo} alt="Logo" />
      </header>
    )
  }
}

export default Header
