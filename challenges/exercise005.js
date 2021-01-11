const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let searchVal = nums.indexOf(n);
  return ((searchVal == null || searchVal == -1 || searchVal == nums.length - 1) ? null : nums[searchVal + 1]);
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  let countOfZero = 0;
  let countOfOne = 0;
  for (let i in str) { str[i] == '0' ? countOfZero++ : countOfOne++ }
  return {
    '0': countOfZero,
    '1': countOfOne
  };
}


const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  return  parseFloat(n.toString().split('').reverse().join('')) * Math.sign(n);
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  return arrs.flat().reduce((a, b) => a + b)
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 2) return arr;
  else {
    [arr[0], arr[(arr.length) - 1]] = [arr[(arr.length) - 1], arr[0]];
    return arr;
  }
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  const searchString = searchTerm.toLocaleLowerCase();
  return Object.keys(haystack).some(property =>
    (typeof haystack[property] === "string") && haystack[property].toLowerCase().includes(searchString))
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  let resultSet = {};
  let splitWords = (str.toLowerCase().replace(/[^\w\s]/gi, "")).split(' ');
  splitWords.forEach(function (el) { resultSet[el] = resultSet[el] ? ++resultSet[el] : 1; });
  return resultSet;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
