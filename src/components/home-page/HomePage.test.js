import React from "react";
import { shallow } from "enzyme";
import HomePage from "./HomePage";

const homePage = shallow(<HomePage />);

it("should render correctly", () => {
  expect(homePage).toMatchSnapshot();
});
