import React, { Component } from "react";
import fetchMock from "fetch-mock";
import { shallow } from "enzyme";
import WeatherApp from "./WeatherApp";

describe("WeatherApp", () => {
  it.only("should return status 200 with fetch mock data", () => {
    const matcher = "Testing";
    // fetchMock.mock(matcher, 200);
    console.log("fetchMock.mock(matcher, 200): ", fetchMock.mock(matcher, 200));
  });
});
