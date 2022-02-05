//============================================= Median of a sorted array
// !! Still don't understand this one

const arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const median = (arr) => {
  const sorted = arr.sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted[mid];
};

console.log("median =>", median(arr7));
