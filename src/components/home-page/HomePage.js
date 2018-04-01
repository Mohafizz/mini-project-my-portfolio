import React from "react";
import "./HomePage.css";
import { Grid, Cell } from "react-mdl";

const HomePage = () => {
  return (
    <div>
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="projects-grid">
          <Cell col={4} tablet={6} phone={3}>
            <img
              className="homepage-avatar"
              src="Images/mohafizz_avatar.jpg"
              alt="mohafizz"
            />
          </Cell>

          <Cell col={6} tablet={8}>
            <div className="homepage-text">
              <h3>Hello there!</h3>
              <p>
                My name is Mohamed Hafiz Bin Abu Bakar. This is my journey as a
                Jumpstarter to switch my career into Tech. Please feel free to
                browse to this website to view all the projects that I am still
                embarking.
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
      <br />
    </div>
  );
};

export default HomePage;
