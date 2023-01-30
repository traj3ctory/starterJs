const arr = [80, 30, 30];
// const arr = [1, 2, 3];

// get the index of an array
var oddOnes = [];
var evenOnes = [];
for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 0) {
    evenOnes.push(arr[i]);
  } else {
    oddOnes.push(arr[i]);
  }
}

let sum = 0;
evenOnes.forEach((el) => {
  sum += el;
});

oddOnes.forEach((el) => {
  sum -= el;
});
console.log({ sum });
