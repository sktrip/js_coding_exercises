function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  let result = [];
  for (let index = 0; index < nums.length; index++) {
    result.push(nums[index] * nums[index])
  }
  return result;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let camelCase = '';
  for (let i = 0; i < words.length; i++) {
    if (words[i] == words[0]) {
      camelCase += words[i];
    }
    else {
      camelCase += words[i].substring(0, 1).toUpperCase() + words[i].substring(1);
    }
  } return camelCase;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let countOfSubjects = 0;
  for (let i = 0; i < people.length; i++) {
    countOfSubjects += people[i].subjects.length;
  } return countOfSubjects;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let flag;
  for (let j = 0; j < menu.length; j++) {
    if (menu[j].ingredients.includes(ingredient)) {
      flag = true;
      break;
    }
    else {
      flag = false;
    }
  } return flag;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        if (result.includes(arr1[i])) {
          continue;
        }
        else {
          result.push(arr1[i]);
        }
      }
    }
  }
  return result.sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
