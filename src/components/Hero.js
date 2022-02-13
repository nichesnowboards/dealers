import React, { Component } from "react";
import PropTypes from 'prop-types';

export class HeroTitle extends Component {
  static propTypes = {
    children: PropTypes.string
  }
  render() {
    return (
      <h2 className="hero-title">{this.props.children}</h2>
    )
  }
}

export class HeroContent extends Component {
  static propTypes = {
    children: PropTypes.object
  }
  render() {
    return (
      <div className="hero-content">{this.props.children}</div>
    )
  }
}

export default class Hero extends Component {
  static propTypes = {
    children: PropTypes.array
  }
  render() {
    return (
      <div className="hero">{this.props.children}</div>
    )
  }
}