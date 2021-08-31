function findLongestWordLength(str) {
  let words = str.split(" ");
  let strLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > strLength) {
      strLength = words[i].length;
    }
  }

  return strLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

/**
 * 1. convert str into array
 * 2. loop through each element in strArr
 * 3. get word length
 * 4. compare word length against stored length
 */
