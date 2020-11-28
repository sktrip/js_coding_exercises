function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  return word.substring(0,1).toUpperCase()+word.substring(1) ; 
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");

  // Add your code here!
  return (firstName.substring(0,1)+'.'+lastName.substring(0,1));
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
      var vatAmount = originalPrice * (vatRate/100);
      vatAmount = +vatAmount.toFixed(2);  
  return originalPrice + vatAmount;
}


function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
  var reductionAmount = originalPrice * (reduction/100);
  reductionAmount = +reductionAmount.toFixed(2);
  return originalPrice - reductionAmount;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
  var startPosition;
  var length;
    if(str.length % 2 == 1) {
      startPosition = str.length / 2;
      length = 1;
  } else {
      startPosition = str.length / 2 - 1;
      length = 2;
  }
  return str.substring(startPosition, startPosition+length);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
