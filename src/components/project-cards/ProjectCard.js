import React from "react";
import {
  CardTitle,
  Card,
  CardText,
  CardActions,
  Button,
  Grid,
  Cell
} from "react-mdl";

const ProjectCard = props => {
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
                  background: `url(Images/${
                    props.imagePath
                  }) center no-repeat #4BBCE3`,
                  backgroundSize: "200px"
                }}
              />
              <CardText>
                My first simple html and css blog page hosted using GH-Pages in
                Github.
              </CardText>
              <CardActions border>
                <Button raised colored href={props.projectUrl} target="blank">
                  View Updates
                </Button>
              </CardActions>
            </Card>
          </Cell>
        </Grid>
      </div>
    </div>
  );
};

export default ProjectCard;
