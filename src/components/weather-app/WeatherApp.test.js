import React, { Component } from "react";
import fetchMock from "fetch-mock";
import { shallow } from "enzyme";
import WeatherApp from "./WeatherApp";

describe("WeatherApp", () => {
  it.only("should return status 200 with fetch mock data", async () => {
    const myMockFn = await fetchMock.mock(
      "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast",
      {
        status: 200,
        body: [{ forecasts: { area: "Yishun", forecast: "Cloudy" } }]
      }
    );
    const wrapper = shallow(<WeatherApp />);
    await wrapper.instance().componentDidMount();
    console.log(
      "wrapper.instance().componentDidMount(): ",
      await wrapper.instance().componentDidMount()
    );
    expect(wrapper.state("forecasts")).toHaveProperty("");
  });
});
