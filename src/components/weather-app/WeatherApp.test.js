import React, { Component } from "react";
import fetchMock from "fetch-mock";
import shallow from "enzyme";

describe("Test", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      value: jest.fn(() => {
        return { matches: true };
      })
    });
  });
});
