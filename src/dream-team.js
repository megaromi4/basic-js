const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) { 
	if (Array.isArray(members)) {
		let add = []; 
		let chooseStr = (i) => {
			if (typeof i == "string") {
				add.push(i.trim());
			}
		}
  let adda = [];
  members.forEach(chooseStr);
  let chooseUpletter = function(i) {
    adda.push(i[0].toUpperCase());
  }
  add.forEach(chooseUpletter);
  let teamName = adda.sort().join('');
  return teamName;} else {
    return false;
  }
}

module.exports = {
  createDreamTeam
};
