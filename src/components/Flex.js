import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
`
export class Row extends Component {
  static propTypes = {
    children: PropTypes.array
  }
  render() {
    return (
      <StyledRow>{this.props.children}</StyledRow>
    )
  }
}

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
`
export class Box extends Component {
  static propTypes = {
    children: PropTypes.array
  }
  render() {
    return (
      <StyledBox>{this.props.children}</StyledBox>
    )
  }
}