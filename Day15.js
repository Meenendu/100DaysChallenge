// This problem was asked by Square.
// Given a list of words, return the shortest unique prefix of each word. For example, given the list:
// dog, cat, apple, apricot, fish
// Return the list:
// d, c, app, apr, f

// solution:
// We can do this by comparing each word to each other and finding the shortest unique prefix for each word. However, this would take O(n2) time. We can speed up the process by using a trie and keeping track of each character's count. Then, after adding each word, we can look for the word in the trie by character until we hit a count of 1 while building the prefix.

class Node {
  constructor(val = null) {
    this.val = val;
    this.children = {};
    this.finished = false;
    this.count = 0;
  }
}

let root = new Node();

const createTier = (word) => {
  node = root;
  word.split("").forEach((char) => {
    if (!(char in node.children)) node.children[char] = new Node(char);
    node.count++;
    node = node.children[char];
  });
  node.finished = true;
};

const findPrefix = (word) => {
  node = root;
  let prefix = "";
  word.split("").forEach((char) => {
    if (node.count === 1) return char;
    prefix += char;
    node = node.children[char];
  });
  return prefix;
};

const words = ["dog", "cat", "apple", "apricot", "fish"];
words.forEach((word) => {
  createTier(word);
});

const sol = words.map((word) => findPrefix(word));
console.log(sol);
