import React, { Component } from 'react';
import styled from 'styled-components';

class Game extends Component {
  constructor(){
    super();
    this.state = {
      guessNumber : '0000',
      secretNumber : (Math.random()).toString().slice(2,6),
      attempts : [],
      gameWon : false,
    }
  }
  __handleInputChange = (event) => {
    if(event.target.value.length <= 4){
      this.setState({
        guessNumber: event.target.value
      })
    }
  }
  __checkAnswer = (event) => {
    event.preventDefault();
    const { guessNumber, secretNumber, gameWon } = this.state;
    const re = /^\d{4}$/;
    if(re.test(guessNumber)){
      var secretArray = [], guessArray = [], bulls = 0, cows = 0;
      secretArray = secretNumber.split("");
      guessArray = guessNumber.split("");
      secretArray.forEach(function(key,index){
        if(secretArray[index] === guessArray[index]){
          bulls = bulls + 1;
          secretArray[index] = 'X';
          guessArray[index] = 'Z';
        }
      })
      secretArray.forEach(function(key,index){
        if(secretArray.indexOf(guessArray[index]) >= 0){
          secretArray[guessArray.indexOf(secretArray[index])] = ''
          cows = cows + 1;
        }
      })
      if(bulls === 4){
        this.setState({
          gameWon: true,
        })
      }
      let newAttempt = {
        key: Date.now(),
        content: guessNumber,
        bullsCount: bulls,
        cowsCount: cows,
      };
      this.setState({
        guessNumber: '',
      })
      this.setState(prevState => {
        return{
          attempts: prevState.attempts.concat(newAttempt)
        };
      })
    }
  }
  render() {
    const { guessNumber, secretNumber, attempts, gameWon } = this.state;
    let renderAttempted = attempts.length > 0 ? attempts.map((item) => {
      return <div key={item.key}>{item.content}
        <p>Bulls : {item.bullsCount} </p>
        <p>Cows: {item.cowsCount} </p>

      </div>
    }) : ''

    return (
      <div>
        { gameWon ?
          <div> WOOHOO! you won in just {attempts.length} attempts</div> :
          <div>
            <form noValidate autoComplete="off" onSubmit={this.__checkAnswer}>
              <input type="number" value={guessNumber} onChange={this.__handleInputChange} />
            </form>
            {renderAttempted}
          </div>
        }
      </div>
    );
  }
}

export default Game;
