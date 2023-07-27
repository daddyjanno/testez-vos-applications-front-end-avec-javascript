import { retrieveSensorsData } from "./sensorsApi";

import { data } from "../../../data/mock-homepage-data";

describe("retrieveSensorsData Unit Test Suite", () => {
  it("should return the mocked data", () => {
    expect(retrieveSensorsData()).toBe(data.facades)
  })
})
