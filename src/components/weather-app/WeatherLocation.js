import React, { Component } from "react";
import { Tabs, Tab } from "react-mdl";

class WeatherLocation extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 2 };
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
        <section>
          <div className="content">
            Content for the tab: {this.state.activeTab}
          </div>
        </section>
      </div>
    );
  }
}

export default WeatherLocation;
