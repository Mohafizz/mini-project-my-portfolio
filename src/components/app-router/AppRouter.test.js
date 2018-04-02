import React from "react";
import { shallow } from "enzyme";
import AppRouter from "./AppRouter";

const router = shallow(<AppRouter />);

it("should render correctly", () => {
  expect(router).toMatchSnapshot();
});
