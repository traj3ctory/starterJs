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
