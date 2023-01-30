// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

//Most popular number in an array by count
function solution(numbers, Y) {
    // Your code goes here
    let counts = {};
    for (let num of numbers) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    let countsArray = Object.keys(counts).map((num) => ({
      num,
      count: counts[num],
    }));
    countsArray.sort((a, b) => b.count - a.count);
    return countsArray.slice(0, Y).map(({ num }) => parseInt(num));
  }
  
  // you can write to stdout for debugging purposes, e.g.
  // console.log('this is a debug message');
  
  // return duplicate words from a sentence in their order of first apperance
  function solution(paragraph, y) {
    // regex to return only alphanumeric value in lowercase
    paragraph = paragraph.replace(/[^\w\s]/gi, "").toLowerCase();
  
    // convert string to an array
    let words = paragraph.split(" ");
    let counts = {};
  
    // loop through the array
    for (let word of words) {
      if (word.length > 0) {
        counts[word] = (counts[word] || 0) + 1;
      }
    }
  
    let countsArray = Object.entries(counts).map(([word, count]) => ({
      word,
      count,
    }));
  
    countsArray.sort((a, b) => b.count - a.count); // sort the arry
  
    let mostPopular = countsArray.slice(0, y);
  
    // Sort the array by word indexing
    mostPopular.sort((a, b) => a.word.localeCompare(b.word));
    return mostPopular.map(({ word }) => word);
  }
  
  // you can write to stdout for debugging purposes, e.g.
  // console.log('this is a debug message');
  
  /**
   * Returns for each country name to search its index in dataset.
   * @returns {Array<Number>}
   */
  function solution(dataset, query) {
    // Your code goes here
    const map = new Map();
    for (let i = 0; i < dataset.length; i++) {
      map.set(dataset[i], i);
    }
    const result = [];
    for (let i = 0; i < query.length; i++) {
      result.push(map.has(query[i]) ? map.get(query[i]) : -1);
    }
    return result;
  }
  
  // ==========
  function pointsBelong(x1, y1, x2, y2, x3, y3, xp, yp, xq, yq) {
    // Check if the triangle is non-degenerate
    let area = (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2;
    if (area === 0) {
      return "triangle is degenerate";
    }
    // Check if point p belongs to the triangle
    let area1 = (xp * (y2 - y3) + x2 * (y3 - yp) + x3 * (yp - y2)) / 2;
    let area2 = (x1 * (yp - y3) + xp * (y3 - y1) + x3 * (y1 - yp)) / 2;
    let area3 = (x1 * (y2 - yp) + x2 * (yp - y1) + xp * (y1 - y2)) / 2;
    if (area === area1 + area2 + area3) {
      // Check if point q belongs to the triangle
      let area4 = (xq * (y2 - y3) + x2 * (y3 - yq) + x3 * (yq - y2)) / 2;
      let area5 = (x1 * (yq - y3) + xq * (y3 - y1) + x3 * (y1 - yq)) / 2;
      let area6 = (x1 * (y2 - yq) + x2 * (yq - y1) + xq * (y1 - y2)) / 2;
      if (area === area4 + area5 + area6) {
        return "both points p and q belong to the triangle";
      } else {
        return "point p belongs to the triangle, but q does not";
      }
    } else {
      // Check if point q belongs to the triangle
      let area4 = (xq * (y2 - y3) + x2 * (y3 - yq) + x3 * (yq - y2)) / 2;
      let area5 = (x1 * (yq - y3) + xq * (y3 - y1) + x3 * (y1 - yq)) / 2;
      let area6 = (x1 * (y2 - yq) + x2 * (yq - y1) + xq * (y1 - y2)) / 2;
      if (area === area4 + area5 + area6) {
        return "point q belongs to the triangle, but p does not";
      } else {
        return "neither point p nor q belongs to the triangle";
      }
    }
  }
  
  function getPasswordStrength(passwords, common_words) {
    let result = [];
  
    for (let i = 0; i < passwords.length; i++) {
      let password = passwords[i];
      let strength = "strong";
  
      // Test if password length is less than 6
      if (password.length < 6) {
        strength = "weak";
      }
      // Test if password is all caps or all lowercase
      else if (
        password === password.toUpperCase() ||
        password === password.toLowerCase()
      ) {
        strength = "weak";
      }
      // Test if password is all numbers
      else if (!isNaN(password)) {
        strength = "weak";
      }
  
      for (let j = 0; j < common_words.length; j++) {
        if (password.toLowerCase().includes(common_words[j])) {
          strength = "weak";
          break;
        }
      }
  
      result.push(strength);
    }
  
    return result;
  }
  
  function palindromeChecker(s, startIndex, endIndex, subs) {
    let result = "";
    for (let i = 0; i < subs.length; i++) {
      let value = s.substring(startIndex[i], endIndex[i] + 1);
      let valueArr = value.split("");
      valueArr.splice(subs[i], 1);
      let valueJoin = valueArr.join("");
      if (valueJoin === valueJoin.split("").reverse().join("")) {
        result += "1";
      } else {
        result += "0";
      }
    }
    return result;
  }
  