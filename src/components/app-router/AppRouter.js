import React from "react";
import { Switch, Route } from "react-router-dom";
import Projects from "../projects/Projects";
import MySkillsRadarChart from "../my-skills-radar-chart/MySkillsRadarChart";
import WeatherApp from "../weather-app/WeatherApp";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/weather-app" component={WeatherApp} />;
      <Route exact path="/projects" component={Projects} />;
      <Route exact path="/skills" component={MySkillsRadarChart} />;
    </Switch>
  );
};

export default AppRouter;
