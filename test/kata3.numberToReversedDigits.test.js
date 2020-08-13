const { numberToReversedDigits } = require("../src");

// describe("numberToReversedDigits", () => {
//   test("returns a reversed array of the number's digits", () => {
// expect(numberToReversedDigits(12345)).toEqual(['5','4','3','2','1'])

//   });
// });

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(78965)).toEqual(['5', '6', '9', '8', '7'])
    
  });
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(45932456)).toEqual(['6', '5', '4', '2', '3', '9', '5', '4'])
  });
});