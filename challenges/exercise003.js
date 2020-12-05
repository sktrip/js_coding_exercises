function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  let result = [];
  for (const num in nums) result.push(nums[num] * nums[num]);
  return result;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let camelCase = '';
  for (let word of words) { camelCase = (word == words[0]) ? camelCase + word : camelCase + word.substring(0, 1).toUpperCase() + word.substring(1); }
  return camelCase;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let countOfSubjects = 0;
  for (let i in people) { countOfSubjects += people[i].subjects.length; }
  return countOfSubjects;
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
    else flag = false;
  } return flag;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let result = [];
  for (let i in arr1) {
    for (let j in arr2) {
      if (arr1[i] == arr2[j]) {
        if (result.includes(arr1[i])) {
          continue;
        }
        else result.push(arr1[i]);
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
