import React, { Component } from "react";
import { Link } from "react-router-dom";
import "react-mdl/extra/material.js";
import {
  IconButton,
  Layout,
  Header,
  Navigation,
  Drawer,
  Content
} from "react-mdl";
import AppRouter from "../app-router/AppRouter";
import "./MyLandingPage.css";
import MyFooter from "../footer/footer";
import ReactRotatingText from "react-rotating-text";

class MyLandingPage extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="landing-header-color"
            title="Mohamed Hafiz Bin Abu Bakar"
            scroll
          >
            <ReactRotatingText
              className="rotating-text"
              color="orange"
              items={["Reset...", "Relearn...", "Reprogram..."]}
            />
            <IconButton name="home" href="/" />
            <Navigation>
              <Link to="/weather-app">Weather App</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/skills">Skills</Link>
            </Navigation>
          </Header>
          <Drawer title="My portfolio">
            <Navigation>
              <Link to="/">Home page</Link>
              <Link to="/weather-app">Weather App</Link>
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
