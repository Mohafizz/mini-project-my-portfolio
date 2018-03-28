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

const UpcomingProjectCard = () => {
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
                  background: "url(Images/wip.png) center no-repeat #ffffff",
                  backgroundSize: "200px"
                }}
              />
              <CardText>Upcoming project. More to go!</CardText>
              <CardActions border>
                <Button colored>View Updates</Button>
              </CardActions>
            </Card>
          </Cell>
        </Grid>
      </div>
    </div>
  );
};

export default UpcomingProjectCard;
