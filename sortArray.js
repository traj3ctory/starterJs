//============================================= sort an array
const arr6 = [1, 2, -4, 0, 3, 4, 120, 5, 6, 7, 8, 9, 10];

const sortArray = (arr) => {
  const sorted = arr.sort((a, b) => a - b);
  return sorted;
};

console.log("sortArray =>", sortArray(arr6));