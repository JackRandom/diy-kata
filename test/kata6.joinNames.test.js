const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {

  expect(joinNames([{

    name: 'Bart'
  
  }, {
  
    name: 'Lisa'
  
  }, {
  
    name: 'Maggie'
  
  }])).toBe('Bart, Lisa & Maggie');

});

  test("returns string of names, seperated by commas and an ampersand", () => {

    expect(joinNames([{

      name: 'Bart'
    
    }, {
    
      name: 'Lisa'
    
    }, {
    
      name: 'Maggie'
    
    }, {
    
      name: 'Marge'
    
    }, {
    
      name: 'Homer'
    
    }])).toBe('Bart, Lisa, Maggie, Marge & Homer');
});
});
