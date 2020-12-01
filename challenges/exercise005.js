const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let searchVal = nums.indexOf(n);
  if (searchVal == null || searchVal == -1 || searchVal == nums.length - 1) {
    return null;
  }
  else {
    return nums[searchVal + 1];
  }
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  let countOfZero = 0;
  let countOfOne = 0;

  for (let i = 0, length = str.length; i < length; i++) {
    if (str[i] === '0') {
      countOfZero++;
    }
    else {
      countOfOne++;
    }
  }
  return {
    '0': countOfZero,
    '1': countOfOne
  };
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  let reversedNumber = parseFloat(n.toString().split('').reverse().join('')) * Math.sign(n)
  return reversedNumber;
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let sum = 0;
  for (let i = 0; i < arrs.length; i++) {
    let arr = arrs[i];
    for (let j = 0; j < arr.length; j++) {
      sum += arr[j];
    }
  } return sum;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 2) {
    return arr;
  }
  else {
    [arr[0], arr[(arr.length) - 1]] = [arr[(arr.length) - 1], arr[0]];
    return arr;
  }
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  let flag;
  let searchString = searchTerm.toLocaleLowerCase();
  for (let j in haystack) {
    let item = haystack[j];
    if (typeof item == 'string') {
      let itemLowerCase = item.toLocaleLowerCase();
      if (itemLowerCase.includes(searchString)) {
        flag = true;
        break;
      }
      else {
        flag = false;
      }
    }
  } return flag;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  let resultSet = {};
  let splitWords = (str.toLowerCase().replace(/[^\w\s]/gi, "")).split(' ');
  splitWords.forEach(function (el) {
    resultSet[el] = resultSet[el] ? ++resultSet[el] : 1;
  });
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
