function titleCase(str) {
  let words = str.toLowerCase().split(" ");
  let newStr = words.map((word) => {
    return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
  });
  return newStr.join(" ");
}

titleCase("I'm a little tea pot");

/**
 * - change to lower case
 * - change string into an array of words
 * - loop through array
 * - treat each word as an array like structure
 * - capitalize only the first letter in each word
 * - turn array back into string
 */
