const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  test("returns the employee's role in the company", () => {

  expect(getEmployerRole('Javid', employees)).toBe('Human Recommended Reading Assistant');
  });
});
