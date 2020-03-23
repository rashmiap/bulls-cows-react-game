import React, { Component } from 'react';
import { gameDifficulties } from '../constants';
import styled from 'styled-components';
import { Form, Radio } from 'semantic-ui-react';

const DifficultiesContainer = styled.div`
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
`;

export default class Difficulties extends Component {
    state = {
        gameDifficulties,
        selectedDifficulty: 30
    };

    handleChange = (e, { value }) => { 
      this.setState({ selectedDifficulty: value })
      this.props.data.setNumberOfAttempts(value);
    };

    render() {
        const radioMarkup = this.state.gameDifficulties.map(({ label, attempts }) => {
            return (
                <Form.Field>
                    <Radio
                        label = { label }
                        name = 'radioGroup'
                        value = { attempts }
                        onChange = { this.handleChange }
                        checked = { this.state.selectedDifficulty === attempts }
                    />
                </Form.Field>
            );
        });

        return (
            <DifficultiesContainer>
                <Form>
                    { radioMarkup }
                </Form>
            </DifficultiesContainer>
        );
    }
}
