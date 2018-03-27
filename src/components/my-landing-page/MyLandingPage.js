import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import AppRouter from "../app-router/AppRouter";
import "./MyLandingPage.css";
import MyFooter from "../footer/footer";

class MyLandingPage extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Mohamed Hafiz" scroll>
            <Navigation>
              <Link to="/about-me">About me</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/skills">Skills</Link>
            </Navigation>
          </Header>
          <Drawer title="My portfolio">
            <Navigation>
              <Link to="/about-me">About me</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/skills">Skills</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <div>
              <AppRouter />
              <MyFooter />
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default MyLandingPage;
