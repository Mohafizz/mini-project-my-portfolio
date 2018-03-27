import React, { Component } from "react";
import "./App.css";
import MyLandingPage from "./components/my-landing-page/MyLandingPage";
import MySkillsRadarChart from "./components/my-skills-radar-chart/MySkillsRadarChart";

class App extends Component {
  render() {
    return (
      <div>
        <MyLandingPage />
        <MySkillsRadarChart />
      </div>
    );
  }
}

export default App;
