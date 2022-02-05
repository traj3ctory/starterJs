// Function to find the missing number in an array
const findMissingNumber = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 != arr[i + 1]) {
      return arr[i] + 1;
    }
  }

  return false;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];
console.log("findMissingNumber =>", findMissingNumber(arr));
