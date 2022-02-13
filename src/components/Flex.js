import React, { Component } from "react";
import PropTypes from "prop-types";

export class Row extends Component {
  static propTypes = {
    children: PropTypes.array
  }
  render() {
    return (
      <div className="row">{this.props.children}</div>
    )
  }
}

export class Box extends Component {
  static propTypes = {
    children: PropTypes.array
  }
  render() {
    return (
      <div className="box">{this.props.children}</div>
    )
  }
}