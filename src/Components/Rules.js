import React, { Component } from 'react';
import styled from 'styled-components';

const RulesWrapper = styled.div`
  padding: 1rem;
  max-width: 40%;
  margin: 0 auto;
  text-align: left;
  border-radius: 20px;
  border: 10px solid #f0f8fc;
  background-color: rgba(0,0,0,0.5);
  @media (max-width: 700px) {
    max-width: 90%;
  }
`
const RulesLink = styled.a`
  font-size: 14px;
  font-weight: normal;
  color: white;
  padding: 1em;
  display: block;
`
class Rules extends Component {
  constructor(){
    super();
    this.state = {
      scrollOpen: false,
    }
  }
  __handleRulesView(){
    this.setState(prevState => {
      return {
        scrollOpen: !prevState.scrollOpen,
      }
    })
  }
  render() {
    const { scrollOpen } = this.state;
    return (
      <div>
        <RulesLink href="javascript:void(0)" onClick={this.__handleRulesView.bind(this)}>{ !scrollOpen ? `HOW TO PLAY` : `LET'S PLAY` }</RulesLink>
        {
          scrollOpen ?
          <RulesWrapper>
            <p>The goal of this game is to guess a 4-digit number within the least number of attempts possible.</p>
            <p>With every guess, you will get a feedback indicating how many Bulls and Cows you got with the guess.</p>
            <p>A Bull means: one of the digits is correct, and is also at the right place.</p>
            <p>A Cow means: one of the digits is a right number, but not at the right place.</p>
            <p> For example, given that the answer is 0130, a guess of 3610 will receive 1 Bull 2 Cows. 1 Bull is 0, 2 Cows are 1 and 3.</p>
          </RulesWrapper>: ''
        }
      </div>
    );
  }
}

export default Rules;
