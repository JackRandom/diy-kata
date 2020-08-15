const joinNames = namesObj => {

    namesObj = namesObj.map(({ name }) => name);
    lastName = namesObj.pop();
    return namesObj.length ? namesObj.join(', ') + ' & ' + lastName : lastName;
  };
 

module.exports = joinNames;
