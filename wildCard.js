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
