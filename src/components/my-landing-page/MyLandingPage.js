import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import AppRouter from "../app-router/AppRouter";
import MyNewSkillsRadarChart from "../my-skills-radar-chart/MyNewSkillsRadarChart";
import MyOldSkillsRadarChart from "../my-skills-radar-chart/MyOldSkillsRadarChart";
import "./MyLandingPage.css";

class MyLandingPage extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header title="Mohamed Hafiz" scroll>
            <Navigation>
              <Link to="/about-me">About me</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
            </Navigation>
          </Header>
          <Drawer title="My portfolio">
            <Navigation>
              <Link to="/about-me">About me</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <div>
              <AppRouter />
              <MyOldSkillsRadarChart />
              <MyNewSkillsRadarChart />
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default MyLandingPage;
