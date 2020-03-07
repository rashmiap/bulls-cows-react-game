import React, { Component } from 'react';
import styled from 'styled-components';
import Rules from './Components/Rules';
import Game from './Components/Game';
import Difficulties from './Components/Difficulties'
import './App.css';
import landScape from './bull-bg.jpg';

const AppWrapper = styled.div`
  padding: 1rem;
  color: white;
  text-align: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${landScape});
  height: 100vh;
  box-sizing: border-box;
  overflow: scroll;
`
const AppHeader = styled.h1`
  display: inline-block;
  background-color: rgba(0,0,0,0.5);
  padding: 15px;
`
const AppLink = styled.a`
  color: white;
  background-color: rgba(0,0,0,0.5);
  padding: 15px;
  bottom: 0;
  box-sizing: border-box;
  display: inline-block;
  margin: 2%;
`

const PlayAgainButton = styled.button`
background: transparent;
font-family: inherit;
font-size: 14px;
margin: 0 auto;
font-weight: normal;
color: white;
padding: 1em;
display: block;
border: none;
text-decoration: underline;
cursor: pointer;
`
class App extends Component {
  state = {
    numberOfAttemptsSelected: 0
  };

  setNumberOfAttempts(numberOfAttemptsSelected) {
    this.setState({ numberOfAttemptsSelected });
  }

  render() {
    return (
      <AppWrapper>
        <AppHeader>Bulls and Cows game</AppHeader>
        <Difficulties 
          data = {
            { setNumberOfAttempts: this.setNumberOfAttempts.bind(this) }
          }
        />
        <Rules />
        <PlayAgainButton onClick = { () => window.location.reload() }> 
          PLAY AGAIN
        </PlayAgainButton>
        <Game 
          numberOfAttemptsSelected = { this.state.numberOfAttemptsSelected } 
        />
        <AppLink href="https://github.com/rashmiap/bulls-cows-react-game">https://github.com/rashmiap/bulls-cows-react-game</AppLink>
      </AppWrapper>
    );
  }
}

export default App;
