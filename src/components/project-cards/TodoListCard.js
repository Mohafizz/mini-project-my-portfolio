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

const TodoListCard = () => {
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
                    "url(Images/todolist-app.jpg) center no-repeat #4BBCE3",
                  backgroundSize: "200px"
                }}
              />
              <CardText>
                A simple todo list app created in react. Continuous test
                integration with Travis CI and hosted in Heroku.
              </CardText>
              <CardActions border>
                <Button
                  raised
                  colored
                  href="https://mohafizz-react-todolist.herokuapp.com/"
                  target="blank"
                >
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

export default TodoListCard;
