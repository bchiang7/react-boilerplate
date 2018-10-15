import React, { Component } from 'react';
import logo from './logo.svg';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const AppContainer = styled.div`
  text-align: center;
`;
const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
const AppLogo = styled.img`
  animation: ${spin} infinite 20s linear;
  height: 40vmin;
`;
const AppLink = styled.a`
  color: #61dafb;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <AppLink href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </AppLink>
        </AppHeader>
      </AppContainer>
    );
  }
}

export default App;
