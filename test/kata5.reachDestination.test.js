const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {

    expect(reachDestination(44, 10)).toBe(4.5)
  });
});
