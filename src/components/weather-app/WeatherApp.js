import React, { Component } from "react";

class WeatherApp extends Component {
  state = {
    forecasts: []
  };

  async componentDidMount() {
    const api_call = await fetch(
      "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast"
    );
    const data = await api_call.json();
    this.setState({ forecasts: data.items[0].forecasts });
  }

  render() {
    return (
      <div>
        {this.state.forecasts.map((forecast, i) => {
          return (
            <div>
              {i + 1 + ")"} {forecast.area + " "}
              {forecast.forecast}
            </div>
          );
        })}
      </div>
    );
  }
}

export default WeatherApp;
