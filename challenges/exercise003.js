function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(value => (Math.pow(value,2)));
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let camelCase = '';
  for (let word of words) { 
    camelCase = (word == words[0]) ? camelCase + word : 
                                     camelCase + word.substring(0, 1).toUpperCase() + word.substring(1); 
  }
  return camelCase;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let countOfSubjects = 0;
  people.forEach(person => countOfSubjects += person.subjects.length)
  return countOfSubjects;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  return menu.some(item => item.ingredients.includes(ingredient))
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
return [...new Set(arr1.filter(value => arr2.includes(value)))].sort()
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
