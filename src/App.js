import React, { Component } from 'react';
import styled from 'styled-components';
import Rules from './Components/Rules';
import Game from './Components/Game';
import './App.css';

const AppWrapper = styled.div`
  padding: 1rem;
  color: white;
  text-align: center;
  background-image: url(https://www.101computing.net/wp/wp-content/uploads/artillery-game-background.png);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  overflow: scroll;
`
class App extends Component {
  render() {
    return (
      <AppWrapper>
        <h1>Bulls and Cows game</h1>
        <Rules />
        <Game />
      </AppWrapper>
    );
  }
}

export default App;
