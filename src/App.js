import React, { Component } from 'react';
import styled from 'styled-components';
import Rules from './Components/Rules';
import Game from './Components/Game';
import './App.css';

const AppWrapper = styled.div`
  background-color: #222;
  padding: 1rem;
  color: white;
  text-align: center;
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <h2>Bulls and Cows game</h2>
        <Rules />
        <Game />
      </AppWrapper>
    );
  }
}

export default App;
