/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1;  // Base case: empty array
  return nums[0] * product(nums.slice(1));  // Recursive case

}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) return 0;  // Base case: empty array
  return Math.max(words[0].length, longest(words.slice(1)));  // Recursive case
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (idx >= str.length) return "";  // Base case: no more characters
  return str[idx] + everyOther(str, idx + 2);  // Recursive case

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) return true;  // Base case: empty or one-character string
  if (str[0] !== str[str.length - 1]) return false;  // Not a palindrome
  return isPalindrome(str.slice(1, -1)); 

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (idx >= arr.length) return -1;  // Base case: string not found
  if (arr[idx] === str) return idx;  // String found
  return findIndex(arr, str, idx + 1);  // Recursive case

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return "";  // Base case: empty string
  return str[str.length - 1] + revString(str.slice(0, -1));  // Recursive case
}


/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  let result = [];

  for (let key in obj) {
    if (typeof obj[key] === "string") {
      result.push(obj[key]);
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      result = result.concat(gatherStrings(obj[key]));  // Recursive case for nested objects
    }
  }

  return result;

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
