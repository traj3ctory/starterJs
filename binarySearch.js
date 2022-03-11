// Implement Binary Search on an array of sorted number
// Binary search on an array
// Time Complexity: O(log n)
// Space Complexity: O(1)

const BinarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

// console.log(BinarySearch([1,2,3,4,5,6,7,8,9,10], 5));

// Binary Search on an array of objects
// Time Complexity: O(log n)
// Space Complexity: O(1)

const data = require("./data.json");
const Arr = data;

const BinarySearchObj = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid].age === target) {
      return mid;
    } else if (arr[mid].age < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

// console.log(BinarySearchObj(Arr, 20));

// Binary Search on an array of objects returns the object
// Time Complexity: O(log n)
// Space Complexity: O(1)

const BinarySearchObjReturn = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid].id === target) {
      return arr[mid];
    } else if (arr[mid].id < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

// function to get execution time of a function
// Time Complexity: O(1)
// Space Complexity: O(1)

const getExecutionTime = async () => {
    const start = new Date().getTime();
    const result = BinarySearchObjReturn(Arr, 2391)
    const end = new Date().getTime();
    console.log(`Execution time: ${end - start}`, result);
    return end - start;
  };
  
  getExecutionTime();

const filter = async (arr, target) => {
  const startTimer = new Date().getTime();
  const result = await arr.find(
    (item) => item.id === target
  );
  const endTimer = new Date().getTime();
  console.log(`Execution time2: ${endTimer - startTimer}s`, result);
};

// console.log(BinarySearchObjReturn(Arr, 21));
filter(Arr, 2391);
