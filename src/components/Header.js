import React, { Component } from 'react'
import axios from 'axios'
import logo from '../logo.png';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faVimeoV, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function MenuOverlay({ showMenu, toggleMenu }) {
  if (showMenu) {
    return (
      <div className="menu-overlay" onClick={toggleMenu}></div>
    )
  }
  return ''
}

function SubMenu({ menu }) {
  if (menu && menu.length) {
    return (
      <div className="sub-menu">
        {menu.map(({title,url,id}) =>
        <div key={id}>
          <a href={url}>{title}</a>
        </div>
        )}
      </div>
    )
  }
  return ''
}

function Menu({ showMenu, menu }) {
  if (showMenu) {
    return (
      <nav>
        {menu.map(({title,url,id,children}) =>
          <div key={id}>
            <a href={url}>{title}</a>
            <SubMenu menu={children} />
          </div>
        )}
      </nav>
    )
  }
  return ''
}

export class Header extends Component {
  state = {
    name: '',
    description: '',
    isLoaded: false,
    showMenu: false,
    menu: null,
  }
  componentDidMount () {
    const restPrefix = 'https://nichesnowboards.com/wp-json'
    // const restPrefix = 'http://localhost:8000/?rest_route='
    axios.get(`${restPrefix}/nichesnowboards/v1/menu/`)
      .then(res => {
        this.setState({
          menu: res.data.reduce(this.buildMenu, [])
        })
      })
      .catch(err => console.log(err))
    axios.get(`${restPrefix}/`)
        .then(res => this.setState({
            name: res.data.name,
            description: res.data.description,
            isLoaded: true
        }))
        .catch(err => console.log(err))
    this.toggleMenu = this.toggleMenu.bind(this)
  }
  buildMenu(menu, item) {
    if (item.menu_item_parent === "0") {
      menu.push({
        id: item.ID,
        title: item.title,
        url: item.url,
        children: []
      })
    } else {
      const parent = menu.find(i => i.id === Number(item.menu_item_parent))
      if (parent) parent.children.push({
        id: item.ID,
        title: item.title,
        url: item.url
      })
    }
    return menu
  }
  toggleMenu() {
    console.log(this.state.showMenu)
    this.setState({ showMenu: !this.state.showMenu })
  }
  render() {
    return (
      <header>
        <div className="topbar">
          <span>{this.state.description}</span>
          <div className="social">
            <a className="icon" href="https://www.facebook.com/nichesnowboards" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a className="icon" href="https://www.instagram.com/nichesnowboards/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            <a className="icon" href="https://vimeo.com/nichesnowboards" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faVimeoV} /></a>
          </div>
        </div>
        <div className="menubar">
          <button className="menu-toggle" onClick={this.toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <Menu showMenu={this.state.showMenu} menu={this.state.menu} />
        <MenuOverlay showMenu={this.state.showMenu} toggleMenu={this.toggleMenu} />
      </header>
    )
  }
}

export default Header
