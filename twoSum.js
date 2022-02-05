//=============================================

// Function to find the index of two numbers such that they add up to a given sum
const sum = 9;
const arr2 = [2, 7, 11, 15];

//============================================= old implementation
// const findTwoSum = (arr, sum) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] + arr[i] === sum) {
//         return [i, j];
//       }
//     }
//   }
// };

// new implementation

const findTwoSum = (arr, sum) => {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const diff = sum - arr[i];
    if (map.hasOwnProperty(diff)) {
      return [map[diff], i];
      // return `${arr[i]} ${diff}`;
    }
    map[arr[i]] = i;
  }
  return null;
};

console.log("findTwoSum =>", findTwoSum(arr2, sum));
