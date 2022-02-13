import React, { Component } from "react";
import PropTypes from 'prop-types';

export class PageTitle extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired
  }
  render() {
    return (
      <h1 className="type-title">{this.props.children}</h1>
    )
  }
}