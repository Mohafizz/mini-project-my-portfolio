import React, { Component } from "react";
import "./App.css";
import MyLandingPage from "./components/my-landing-page/MyLandingPage";
import MyNewSkillsRadarChart from "./components/my-skills-radar-chart/MyNewSkillsRadarChart";
import MyOldSkillsRadarChart from "./components/my-skills-radar-chart/MyOldSkillsRadarChart";

class App extends Component {
  render() {
    return (
      <div>
        <MyLandingPage />
        <MyOldSkillsRadarChart />
        <MyNewSkillsRadarChart />
      </div>
    );
  }
}

export default App;
