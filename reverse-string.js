function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");

/**
 * 1. convert str into array of characters
 * 2. reverse array
 * 3. convert back to string
 */
