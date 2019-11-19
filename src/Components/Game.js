import React, { Component } from "react";
import styled from "styled-components";

const GameInput = styled.input`
  text-align: center;
  font-size: 3em;
  box-sizing: border-box;
  padding: 10px;
  color: cadetblue;
  font-family: inherit;
  margin: 3% auto;
  max-width: 80%;
  border-radius: 20px;
  border: none;
  &:focus {
    outline: none;
  }
`;
const GameAttempts = styled.div`
  border-top: 1px dashed;
  padding: 2%;
  max-width: 50%;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.5);
  :first-of-type {
    border-top: none;
  }
`;
const WonText = styled.h1`
  background-color: rgba(0, 0, 0, 0.5);
  display: inline-block;
  padding: 20px;
`;
class Game extends Component {
  constructor() {
    super();
    this.state = {
      guessNumber: "",
      secretNumber: Math.random()
        .toString()
        .slice(2, 6),
      attempts: [],
      attemptCount: 0,
      gameWon: false
    };
  }
  __handleInputChange = event => {
    if (event.target.value.length <= 4) {
      this.setState({
        guessNumber: event.target.value
      });
    }
  };
  __checkAnswer = event => {
    event.preventDefault();
    const { guessNumber, secretNumber, attemptCount } = this.state;
    const re = /^\d{4}$/;
    if (re.test(guessNumber)) {
      var secretArray = [],
        guessArray = [],
        bulls = 0,
        cows = 0;
      secretArray = secretNumber.split("");
      guessArray = guessNumber.split("");
      secretArray.forEach(function(key, index) {
        if (secretArray[index] === guessArray[index]) {
          bulls = bulls + 1;
          secretArray[index] = "X";
          guessArray[index] = "Z";
        }
      });
      secretArray.forEach(function(key, index) {
        if (secretArray.indexOf(guessArray[index]) >= 0) {
          secretArray[secretArray.indexOf(guessArray[index])] = "";
          cows = cows + 1;
        }
      });
      if (bulls === 4) {
        this.setState({
          gameWon: true
        });
      }
      let newAttempt = {
        key: Date.now(),
        content: guessNumber,
        bullsCount: bulls,
        cowsCount: cows,
        attemptCount: attemptCount + 1
      };
      this.setState(prevState => {
        return {
          guessNumber: "",
          attemptCount: prevState.attemptCount + 1,
          attempts: [newAttempt, ...prevState.attempts]
        };
      });
    }
  };
  render() {
    const { guessNumber, attempts, gameWon, attemptCount } = this.state;
    let renderAttempted =
      attempts.length > 0
        ? attempts.map(item => {
            return (
              <GameAttempts key={item.key}>
                <p> ATTEMPT {item.attemptCount}</p>
                <h2>{item.content}</h2>
                <p>
                  {item.bullsCount}{" "}
                  {item.bullsCount.length > 0 ? "Bulls" : "Bull"}{" "}
                  {item.cowsCount} Cows
                </p>
              </GameAttempts>
            );
          })
        : "";

    return (
      <div>
        {gameWon ? (
          <WonText> WOOHOO! You won in just {attemptCount} attempts</WonText>
        ) : (
          <div>
            <form noValidate autoComplete="off" onSubmit={this.__checkAnswer}>
              <GameInput
                type="number"
                placeholder="0000"
                onFocus={e => (e.target.placeholder = "")}
                onBlur={e => (e.target.placeholder = "0000")}
                value={guessNumber}
                onChange={this.__handleInputChange}
              />
            </form>
            {renderAttempted}
          </div>
        )}
      </div>
    );
  }
}

export default Game;
