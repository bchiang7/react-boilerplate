import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { Header, Img, P } from '../style';
import styled, { keyframes } from 'styled-components';
import Head from './Head';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const StyledApp = styled.div`
  text-align: center;
`;
const StyledLogo = Img.extend`
  animation: ${spin} infinite 20s linear;
  height: 80px;
`;
const StyledHeader = Header.extend`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;
const StyledTitle = styled.h1`
  font-size: 1.5em;
`;
const StyledIntro = P.extend`
  font-size: large;
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <Head />
        <StyledHeader>
          <StyledLogo src={logo} alt="logo" />
          <StyledTitle>Welcome to React</StyledTitle>
        </StyledHeader>
        <StyledIntro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </StyledIntro>
      </StyledApp>
    );
  }
}

export default App;
