// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript

const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

const gooseFilter = (birds) => birds.filter((bird) => !geese.find((goose) => goose === bird));

// is it faster ? const gooseFilter = (birds) => birds.filter((bird) => !(bird === geese[0] || bird === geese[1] || bird === geese[2] || bird === geese[3] || bird === geese[4]));

console.log(gooseFilter(["Mallard", "African", "Hook Bill", "Blue Swedish", "Crested", 'Toulouse']));
