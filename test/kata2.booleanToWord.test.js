const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  // how do we create specs again???
  test("returns Yes when passed true", () => {

    expect(booleanToWord(true)).toBe("Yes");

  });

  test("returns No when passed false", () => {

    expect(booleanToWord(false)).toBe("No");

  });
});