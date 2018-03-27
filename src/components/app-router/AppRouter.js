import React from "react";
import { Switch, Route } from "react-router-dom";
import Resume from "../resume/Resume";
import Projects from "../projects/Projects";
import AboutMe from "../about-me/AboutMe";
import MyLandingPage from "../my-landing-page/MyLandingPage";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/about-me" component={AboutMe} />;
      <Route exact path="/resume" component={Resume} />;
      <Route exact path="/projects" component={Projects} />;
    </Switch>
  );
};

export default AppRouter;
