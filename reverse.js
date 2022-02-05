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
