import React from 'react';

const Form = props => {

        return (
            <form onSubmit={props.getWeather}>
            <input type="input" name="city" placeholder="city...."></input>
            <input type="input" name="country" placeholder="country..."></input>
            <button type="submit">Search Weather</button>
        </form>
        );
}

export default Form;           