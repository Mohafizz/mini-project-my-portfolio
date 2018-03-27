import React, { Component } from "react";
import "./MyLandingPage.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

class MyLandingPage extends Component {
  render() {
    return (
      <div style={{ height: "500px", position: "relative" }}>
        <Layout
          style={{
            backgroundColor: "cyan"
          }}
        >
          <Header transparent title="Mohamed Hafiz" style={{ color: "white" }}>
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
      </div>
    );
  }
}

export default MyLandingPage;
