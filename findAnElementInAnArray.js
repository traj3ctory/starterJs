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
  } else {
    console.log("findElement =>", "Option 1 is not an array");
  }
};

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const k = 10;
findElement(arr3, k);
