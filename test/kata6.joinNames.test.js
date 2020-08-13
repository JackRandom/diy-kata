const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {

  expect(joinNames('bart', 'lisa', 'maggie')).toEqual('Bart, Lisa & Maggie');

});

  test("returns string of names, seperated by commas and an ampersand", () => {

    expect(joinNames('Bart', 'Lisa', 'Maggie', 'Marge', 'Homer')).toEqual('Bart, Lisa, Maggie, Marge & Homer');
});
});
