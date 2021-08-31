function largestOfFour(arr) {
  return arr.map((subArray) => Math.max(...subArray));
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

/**
 * 1. determine largest number in current array
 * 2. push into new array
 * 3. determine largest number in next array
 * 4. push into new array
 * 5. once finished with all arrays return new array with
 * largest values from subarrays
 */
