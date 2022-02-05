// ========================================== absolute difference in an array
// const arr8 = [3, 1, 2, 4, 3];
// const absoluteDifference = (arr) => {
//   const sorted = arr.sort((a, b) => a - b);
//   const diff = Math.abs(sorted[0] - sorted[sorted.length - 1]);
//   return diff;
// };

// ===================================== minimum absolute difference in an array
const arr8 = [3, 1, 2, 4, 3];
// const minimumAbsoluteDifference = (arr) => {
//   const sorted = arr.sort((a, b) => a - b);
//   let min = Infinity;
//   for (let i = 1; i < sorted.length; i++) {
//     const diff = Math.abs(sorted[i] - sorted[i - 1]);
//     if (diff < min) {
//       min = diff;
//     }
//   }
//   return min;
// };


const minimumAbsoluteDifference = (arr) => {
  let min = Infinity;
  let leftSum = 0;
  let rightSum = arr.reduce((el, i) => el + i, 0);
  
  arr.forEach(item => {
      leftSum += item;
      rightSum -= item;
      const diff = Math.abs(leftSum - rightSum);
      if (min > diff) {
        min = diff;
    }
  });
  
  return min;
}

console.log("minimumAbsoluteDifference =>", minimumAbsoluteDifference(arr8));
