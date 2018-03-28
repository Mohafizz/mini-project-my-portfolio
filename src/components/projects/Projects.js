import React, { Component } from "react";
import "./Projects.css";
import {
  CardTitle,
  Card,
  CardText,
  CardActions,
  Button,
  Grid,
  Cell
} from "react-mdl";
class Projects extends Component {
  render() {
    return (
      <div>
        <div style={{ width: "100%", margin: "auto" }}>
          <Grid className="projects-grid">
            <Cell col={4}>
              <Card
                shadow={0}
                style={{ width: "320px", height: "320px", margin: "auto" }}
              >
                <CardTitle
                  expand
                  style={{
                    color: "#fff",
                    background:
                      "url(Images/todolist-app.jpg) center no-repeat #46B6AC",
                    backgroundSize: "150px"
                  }}
                />
                <CardText>
                  A simple todo list app created in react. Continuous test
                  integration with Travis CI and hosted in Heroku.
                </CardText>
                <CardActions border>
                  <Button colored>View Updates</Button>
                </CardActions>
              </Card>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Projects;
