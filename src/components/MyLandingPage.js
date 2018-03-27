import React, { Component } from "react";
import "./MyLandingPage.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import MySkillsRadarChart from "./MySkillsRadarChart";

class MyLandingPage extends Component {
  render() {
    return (
      <div style={{ height: "500px", position: "relative" }}>
        <Layout
          style={{
            backgroundColor: "cyan"
          }}
        >
          <Header
            transparent="false"
            title="Mohamed Hafiz"
            style={{ color: "white" }}
          >
            <Navigation>
              <a href="/">Link</a>
              <a href="/">Link</a>
              <a href="/">Link</a>
              <a href="/">Link</a>
            </Navigation>
          </Header>
          <Drawer title="My portfolio">
            <Navigation>
              <a href="/">Link</a>
              <a href="/">Link</a>
              <a href="/">Link</a>
              <a href="/">Link</a>
            </Navigation>
          </Drawer>
          <Content />
        </Layout>
        <MySkillsRadarChart />
      </div>
    );
  }
}

export default MyLandingPage;
