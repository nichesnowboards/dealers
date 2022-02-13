import React, { Component } from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em 4em;
  justify-content: center;
  align-items: center;
`
const StyledTitle = styled.h2`
  text-align: center;
  margin: 0;
`
const StyledContent = styled.div`
  text-align: center;
  margin-top: 1em;

  > p {
    margin: 0;
  }
`
export default class Hero extends Component {
  static propTypes = {
    children: PropTypes.array,
    text: PropTypes.string.isRequired
  }
  render() {
    return (
      <StyledHero>
        <StyledTitle>{this.props.text}</StyledTitle>
        <StyledContent>{this.props.children}</StyledContent>
      </StyledHero>
    )
  }
}