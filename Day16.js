// This problem was asked by Google.
// Given a word W and a string S, find all starting indices in S which are anagrams of W.
// For example, given that W is "ab", and S is "abxaba", return 0, 3, and 4.

const compare = (pattern, charWindow) => {
  for (let i = 0; i < 256; i++) {
    if (pattern[i] !== charWindow[i]) return false;
  }
  return true;
};

const findAnagrams = (pattern, text) => {
  const patternSize = pattern.length;
  const textSize = text.length;

  let patternCharCount = new Array(256).fill(0);
  let textWindowCharCount = new Array(256).fill(0);

  // map each char to their respective ASCII value in array and increment the count
  for (let i = 0; i < patternSize; i++) {
    patternCharCount[pattern[i].charCodeAt(0)]++;
    textWindowCharCount[text[i].charCodeAt(0)]++;
  }

  for (let i = patternSize; i < textSize; i++) {
    // Compare counts of current window of text with counts of pattern
    if (compare(patternCharCount, textWindowCharCount))
      console.log(`Anagram at index ${i - patternSize}`);

    //Add current character to current window
    textWindowCharCount[text.charCodeAt(i)]++;

    // Remove the first character of previous window
    textWindowCharCount[text.charCodeAt(i - patternSize)]--;
  }

  // Check for the last window in text
  if (compare(patternCharCount, textWindowCharCount))
    console.log(`Anagram at index ${textSize - patternSize}`);
};

const pattern = "ab";
const text = "abxaba";
findAnagrams(pattern, text);
