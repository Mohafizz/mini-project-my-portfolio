import React, { Component } from "react";
import { Tabs, Tab } from "react-mdl";
import fetch from "isomorphic-fetch";
import "./WeatherApp.css";

class WeatherApp extends Component {
  constructor(props) {
    console.log();
    super(props);
    this.state = {
      activeTab: 0,
      forecasts: []
    };
  }

  async componentDidMount() {
    const api_call = await fetch(
      "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast",
      {
        mode: "cors"
      }
      // read more about why we need the CORS option here: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    );
    const data = await api_call.json();
    // console.log("data: ", data);
    this.setState({ forecasts: data.items[0].forecasts });
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          Yishun area:
          <div>
            <br />
            {this.state.forecasts.map((forecast, i) => {
              return forecast.area === "Yishun" ? forecast.forecast : null;
            })}
          </div>
        </div>
      );
    }
    return (
      <div>
        City area:
        <div>
          <br />
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
        <br />
        <section>{this.toggleCategories()}</section>
        <br />
      </div>
    );
  }
}

export default WeatherApp;
