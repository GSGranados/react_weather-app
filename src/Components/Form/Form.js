import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type="input" name="city" placeholder="city...."></input>
                <input type="input" name="country" placeholder="country..."></input>
                <button type="submit">Search Weather</button>
            </form>
        );
    }
}

export default Form;           