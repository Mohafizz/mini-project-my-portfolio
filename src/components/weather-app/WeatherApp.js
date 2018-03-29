import React, { Component } from "react";
import { Tabs, Tab } from "react-mdl";
import fetch from "isomorphic-fetch";

class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      forecasts: []
    };
  }

  async componentDidMount() {
    const api_call = await fetch(
      "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast"
    );
    const data = await api_call.json();
    console.log("data: ", data);
    this.setState({ forecasts: data.items[0].forecasts });
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          Yishun:
          <div>
            {this.state.forecasts.map((forecast, i) => {
              return forecast.area === "Yishun" ? forecast.forecast : null;
            })}
          </div>
        </div>
      );
    }
    return (
      <div>
        City:
        <div>
          {this.state.forecasts.map((forecast, i) => {
            return forecast.area === "City" ? forecast.forecast : null;
          })}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="weather-location-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Home</Tab>
          <Tab>ThoughtWorks</Tab>
        </Tabs>
        <section>{this.toggleCategories()}</section>
      </div>
    );
  }
}

export default WeatherApp;
