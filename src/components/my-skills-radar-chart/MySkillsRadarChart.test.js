import React from "react";
import MySkillsRadarChart from "./MySkillsRadarChart";
import { shallow } from "enzyme";

const mySkills = shallow(<MySkillsRadarChart />);

it("should render correctly", () => {
  expect(mySkills).toMatchSnapshot();
});
