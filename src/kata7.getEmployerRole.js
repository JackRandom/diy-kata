const getEmployerRole = (employeeName, employees) => {
  let results;
  employees.find(element => element.name === employeeName ? results = element.role : null)

  return results;
};

module.exports = getEmployerRole;


// employees.find(element => {

//   if(element.name === employeeName) {
//     return element.role;
//   }

// });