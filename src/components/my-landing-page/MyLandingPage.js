import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import AppRouter from "../app-router/AppRouter";
import "./MyLandingPage.css";
import MyFooter from "../footer/footer";
var ReactRotatingText = require("react-rotating-text");

class MyLandingPage extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Mohamed Hafiz" scroll>
            <ReactRotatingText
              className="rotating-text"
              color="orange"
              items={["Reset...", "Relearn...", "Reprogram..."]}
            />
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
            <div
              className="header-image"
              style={{
                background:
                  "url(Images/lego-cropped.jpg) right no-repeat #4BBCE3"
              }}
            />
            <AppRouter />
            <MyFooter />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default MyLandingPage;
