function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let smallNumbers = [];
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] < 1) {
      smallNumbers.push(nums[index]);
    }
  } return smallNumbers;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let searchString = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i].startsWith(char)) {
      searchString.push(names[i]);
    }
  } return searchString;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let verbsInWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].substring(0, 3) == 'to ') {
      verbsInWords.push(words[i]);
    }
  } return verbsInWords;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let integerNumbers = [];
  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i])) {
      integerNumbers.push(nums[i]);
    }
  } return integerNumbers;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let userCities = [];
  for (let i = 0; i < users.length; i++) {
    let dataInUser = users[i].data;
    userCities.push(dataInUser.city.displayName);
  }
  return userCities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let sqrtOfNumber = [];
  for (let i = 0; i < nums.length; i++) {
    sqrtOfNumber.push(+(Math.sqrt(nums[i])).toFixed(2));
  } return sqrtOfNumber;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let resultSet = [];
  let searchString = str.toLocaleLowerCase();
  for (let i = 0; i < sentences.length; i++) {
    let searchSentence = sentences[i].toLocaleLowerCase();
    if (searchSentence.includes(searchString)) {
      resultSet.push(sentences[i]);
    }
  } return resultSet;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let longestSides = [];
  for (let i = 0; i < triangles.length; i++) {
    let triangleSides = triangles[i];
    let longestSide = 0;
    for (let j = 0; j < triangleSides.length; j++) {
      if (longestSide < triangleSides[j]) {
        longestSide = triangleSides[j];
      }
    } longestSides.push(longestSide);
  } return longestSides;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
