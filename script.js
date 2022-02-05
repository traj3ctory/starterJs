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

//=============================================

// Function to find duplicate number in an array
const arr1 = [1, 2, 1, 3, 4, 3, 5, 200, 200];
const findDuplicateNumber = (arr) =>
  arr.filter((item, i) => arr.indexOf(item) != i);
console.log("findDuplicateNumber =>", findDuplicateNumber(arr1));

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

//=============================================

/**
 * Function to find an element in an array
 * @params Array
 */

const findElement = (arr, k) => {
  if (Array.isArray(arr)) {
    arr = arr.sort();
    const found = arr.find((el) => el === k);
    if (found !== undefined) {
      console.log("findElement =>", "YES");
    } else {
      console.log("findElement =>", "NO");
    }
  }
};

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const k = 10;
findElement(arr3, k);

//============================================= All odd numbers between two numbers

const number_game = (x, y) => {
  const min = Math.min(x, y);
  const max = Math.max(x, y);
  const arr = [];
  for (let i = min; i <= max; i++) {
    if (i % 2 == 1) {
      arr.push(i);
    }
  }
  return arr;
};

console.log("number_game =>", number_game(20, 4));

//=============================================  All even numbers between two numbers
const even_numbers = (x, y) => {
  const min = Math.min(x, y);
  const max = Math.max(x, y);
  const arr = [];
  for (let i = min; i <= max; i++) {
    if (i % 2 == 0) {
      arr.push(i);
    }
  }
  return arr;
};
console.log("even_numbers =>", even_numbers(20, 4));

//========================================= Reverse String
const reverseString = (str) => {
  const arr = str.split("");
  const reversed = arr.reverse();
  return reversed.join("");
};
console.log("reverseString =>", reverseString("hello"));

//======================================== Reverse Word
const reverseWord = (str) => {
  const arr = str.split(" ");
  const reversed = arr.reverse();
  return reversed.join(" ");
};
console.log("reverseWord =>", reverseWord("hello world"));

//============================================= sort an array
const arr6 = [1, 2, -4, 0, 3, 4, 120, 5, 6, 7, 8, 9, 10];

const sortArray = (arr) => {
  const sorted = arr.sort((a, b) => a - b);
  return sorted;
};

console.log("sortArray =>", sortArray(arr6));

//============================================= Median of a sorted array
const arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const median = (arr) => {
  const sorted = arr.sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted[mid];
};

console.log("median =>", median(arr7));

// ========================================== wildcard matching
const wildcard = (str, pattern) => {
  const strArr = str.split("");
  const patternArr = pattern.split("");

  for (let i = 0; i < patternArr.length; i++) {
    if (patternArr[i] === "?") {
      patternArr[i] = ".";
    }
  }

  const regex = new RegExp(patternArr.join(""));
  return regex.test(str);
};

console.log("wildcard =>", wildcard("hello", "h?o"));

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
