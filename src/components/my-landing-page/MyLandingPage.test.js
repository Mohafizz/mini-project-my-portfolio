import React from "react";
import { shallow } from "enzyme";
import MyLandingPage from "./MyLandingPage";

const landingPage = shallow(<MyLandingPage />);

it("should render correctly", () => {
  expect(landingPage).toMatchSnapshot();
});
