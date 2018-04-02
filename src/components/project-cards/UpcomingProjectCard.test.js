import React from "react";
import { shallow } from "enzyme";
import UpcomingProjectCard from "./UpcomingProjectCard";

const upcomingCard = shallow(<UpcomingProjectCard />);

it("should render correctly", () => {
  expect(upcomingCard).toMatchSnapshot();
});
