import React from "react";
import { shallow } from "enzyme";
import MyFooter from "./footer";

const footer = shallow(<MyFooter />);

it("should render correctly", () => {
  expect(footer).toMatchSnapshot();
});
