import React from 'react';
import './Form.css';
const Form = props => {

        return (
            <form onSubmit={props.getWeather}>
            <input className="inputForm" type="input" name="city" placeholder="city...."></input>
            <input className="inputForm" type="input" name="country" placeholder="country..."></input>
            <button type="submit">Search Weather</button>
        </form>
        );
}

export default Form;           