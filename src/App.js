import React, { Component } from 'react';
import Title from './Components/Title/Title';
import Form from './Components/Form/Form';
import Weather from './Components/Weather/Weather';

class App extends Component {
  render() {
    return (
      <div>
        <Title></Title>
        <Form></Form>
        <Weather></Weather>
      </div>
    );
  }
}

export default App;