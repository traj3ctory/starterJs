//=============================================

// Function to find duplicate number in an array
const arr1 = [1, 2, 1, 3, 4, 3, 5, 200, 200];
const findDuplicateNumber = (arr) =>
  arr.filter((item, i) => arr.indexOf(item) != i);
console.log("findDuplicateNumber =>", findDuplicateNumber(arr1));
