//1. Simplify the following big O expressions as much as possible:

1. O(n + 10) -> O(n)
2. O(100 * n) -> O(n)
3. O(25) -> O(1)
4. O(n^2 + n^3) -> O(n^3)
5. O(n + n + n + n) -> O(n)
6. O(1000 * log(n) + n) -> O(n)
7. O(1000 * n * log(n) + n) -> O(n log n)
8. O(2^n + n^2) -> O(2^n)
9. O(5 + 3 + 1) -> O(1)
10. O(n + n^(1/2) + n^2 + n * log(n)^10) -> O(n^2)

/*2. Determine the time complexities for each of the following functions. 
If you’re not sure what these functions do, copy and paste them into the console and experiment with different inputs!*/


function logUpTo(n) {
    for (let i = 1; i <= n; i++) {
      console.log(i);
    }
  } - Complexity is O(n)


  function logAtLeast10(n) {
    for (let i = 1; i <= Math.max(n, 10); i++) {
      console.log(i);
    }
  } - Complexity is O(n)


  function logAtMost10(n) {
    for (let i = 1; i <= Math.min(n, 10); i++) {
      console.log(i);
    }
  } - Complexity is O(1)


  function onlyElementsAtEvenIndex(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  } - - Complexity is O(n)

  function subtotals(array) {
    let subtotalArray = [];
    for (let i = 0; i < array.length; i++) {
      let subtotal = 0;
      for (let j = 0; j <= i; j++) {
        subtotal += array[j];
      }
      subtotalArray.push(subtotal);
    }
    return subtotalArray;
  } - Complexity is O(n^2)

  function vowelCount(str) {
    let vowelCount = {};
    const vowels = "aeiouAEIOU";
  
    for (let char of str) {
      if(vowels.includes(char)) {
        if(char in vowelCount) {
          vowelCount[char] += 1;
        } else {
          vowelCount[char] = 1;
        }
      }
    }
  
    return vowelCount;
  } Complexity is O(n), where "n" is the length of the input string and the max number of keys is 10

  /* 3. Answer the following questions*/


  1. True or false: n^2 + n is O(n^2). 
  2. True or false: n^2 * n is O(n^3).   
  3. True or false: n^2 + n is O(n).      
  4. What’s the time complexity of the .indexOf array method?
  5. What’s the time complexity of the .includes array method?
  6. What’s the time complexity of the .forEach array method?
  7. What’s the time complexity of the .sort array method?
  8. What’s the time complexity of the .unshift array method?
  9. What’s the time complexity of the .push array method?
  10. What’s the time complexity of the .splice array method?
  11. What’s the time complexity of the .pop array method?
  12. What’s the time complexity of the Object.keys() function?


1. True. The term n^2 + n is still dominated by the highest power of n, which is n^2. Therefore, it is O(n^2).
2. True. The expression n^2 * n simplifies to n^3, so it is O(n^3).
3. False. The term n^2 + n is dominated by the n^2 term, so it is not O(n). It is O(n^2).
4. The time complexity of the .indexOf array method is O(n), where "n" is the length of the array. 
This is because it may need to iterate through the entire array to find the desired element.
5. The time complexity of the .includes array method is O(n), where "n" is the length of the array. 
Similar to .indexOf, it may need to iterate through the entire array to check for inclusion.
6. The time complexity of the .forEach array method is O(n), where "n" is the length of the array. 
It iterates through each element of the array once.
7. The time complexity of the .sort array method is typically O(n log n) on average. 
The specific implementation may vary, but many sorting algorithms have an average time complexity of O(n log n).
8. The time complexity of the .unshift array method is O(n), where "n" is the length of the array. 
This is because adding an element at the beginning may require shifting all existing elements to make room.
9. The time complexity of the .push array method is O(1), or constant time. It adds an element to the end of the array, 
and the operation's time remains constant regardless of the array size.
10. The time complexity of the .splice array method depends on the operation performed. 
In the worst case, where elements are removed or added at the beginning, it can be O(n), where "n" is the length of the array.
11. The time complexity of the .pop array method is O(1), or constant time. 
It removes the last element of the array, and the operation's time remains constant regardless of the array size.
12. The time complexity of the Object.keys() function is O(n), where "n" is the number of keys in the object. It needs to iterate through all the keys in the object.


