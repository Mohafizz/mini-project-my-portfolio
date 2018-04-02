import React from "react";
import HtmlCssBlogCard from "./HtmlCssBlogCard";
import { shallow } from "enzyme";

const htmlCard = shallow(<HtmlCssBlogCard />);

it("should render correctly", () => {
  expect(htmlCard).toMatchSnapshot();
});
