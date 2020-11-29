const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!

  var searchVal = nums.indexOf(n);
  if(searchVal == null) {
    return null;
  }
  else {
  return nums[searchVal+1]; 
  }
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  var sum =0 ;
  for(var i=0; i<arrs.length ;i++) {
    var arr = arrs[i];
    for (var j=0; j<arr.length ;j++) {         
        sum += arr[j];
    }
  }return sum;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  if(arr.length <2) {
    return arr;
  }
  else {
  [arr[0], arr[(arr.length)-1]] = [arr[(arr.length)-1], arr[0]];
  return arr;
  }
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  var flag;
  searchString = searchTerm.toLocaleLowerCase();
    for (var j in haystack)  {
    var item = haystack[j];
    if(typeof item == 'object') {
      findNeedle(item,searchString);   
    } 
    if(item.indexOf(searchString)>-1) {
      flag = true;
    }
    else {
      flag = false 
          }
  } return flag;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!(
  var resultSet = {};
  var splitWords = (str.toLowerCase().replace(/[^\w\s]/gi, "")).split(' ');
  splitWords.forEach(function(el, i ,arr) {
     resultSet[el] = resultSet[el] ? ++resultSet[el]: 1;
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
