import React from "react";
import { shallow } from "enzyme";
import TodoListCard from "./TodoListCard";

const todoCard = shallow(<TodoListCard />);

it("should render correctly", () => {
  expect(todoCard).toMatchSnapshot();
});
