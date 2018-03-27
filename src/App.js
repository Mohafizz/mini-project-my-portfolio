import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MyLandingPage from "./components/my-landing-page/MyLandingPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MyLandingPage />
      </BrowserRouter>
    );
  }
}

export default App;
