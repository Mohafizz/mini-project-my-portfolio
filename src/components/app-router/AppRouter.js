import React from "react";
import { Switch, Route } from "react-router-dom";
import Resume from "../resume/Resume";
import Projects from "../projects/Projects";
import AboutMe from "../about-me/AboutMe";
import MySkillsRadarChart from "../my-skills-radar-chart/MySkillsRadarChart";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/about-me" component={AboutMe} />;
      <Route exact path="/resume" component={Resume} />;
      <Route exact path="/projects" component={Projects} />;
      <Route exact path="/skills" component={MySkillsRadarChart} />;
    </Switch>
  );
};

export default AppRouter;
