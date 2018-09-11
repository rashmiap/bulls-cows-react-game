import React, { Component } from 'react';
import styled from 'styled-components'
import './App.css';

const AppWrapper = styled.div`
  background-color: #222;
  height: 12rem;
  padding: 1rem;
  color: white;
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        hello world!
      </AppWrapper>
    );
  }
}

export default App;
