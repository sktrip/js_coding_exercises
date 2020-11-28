function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  return person.city == 'Manchester';
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  const busCapacity = 40;
  var numberOfBuses = Math.ceil(people/busCapacity);
  return numberOfBuses;  
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  var sheepCount = 0;
  for(var index=0; index < arr.length; index++) {
    if(arr[index]=='sheep') {
      sheepCount += 1;
    }
  } return sheepCount;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  return ((person.address.postCode.startsWith('M')) && (person.address.city=='Manchester'));
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
