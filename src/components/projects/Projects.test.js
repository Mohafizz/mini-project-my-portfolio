import React from "react";
import { shallow } from "enzyme";
import Projects from "./Projects";

const project = shallow(<Projects />);

it("should render correctly", () => {
  expect(project).toMatchSnapshot();
});
