import React, { Component } from "react";
import "./Projects.css";
import TodoListCard from "../project-cards/TodoListCard";
import HtmlCssBlogCard from "../project-cards/HtmlCssBlogCard";
import { Grid, Cell } from "react-mdl";
import UpcomingProjectCard from "../project-cards/UpcomingProjectCard";
class Projects extends Component {
  render() {
    return (
      <div>
        <div style={{ width: "100%", margin: "auto" }}>
          <Grid className="projects-grid">
            <Cell col={4} tablet={6}>
              <HtmlCssBlogCard />
            </Cell>
            <Cell col={4} tablet={6}>
              <TodoListCard />
            </Cell>
            <Cell col={4} tablet={6}>
              <UpcomingProjectCard />
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Projects;
