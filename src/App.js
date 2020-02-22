import React, { Component } from "react";
import Title from "./Components/Title/Title";
import Form from "./Components/Form/Form";
import Weather from "./Components/Weather/Weather";
const API_KEY = "5100858a20443be1c19ca54f43bb009e";
class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        humidity: data.main.humidity,
        country: data.sys.country,
        city: data.name,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        humidity: undefined,
        country: undefined,
        city: undefined,
        description: undefined,
        error: "Please provide a couple of values :( !!!!"
      });
    }
  };
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title container">
                  <Title></Title>
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather}></Form>
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  ></Weather>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
