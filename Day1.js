// #1 coding problem.
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// method 1 with O(n^2)
const solution = (arr, k) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) return true;
    }
  }
  return false;
};

// method 2 with O(N)
const solution2 = (arr, k) => {
  const x = new Set();
  for (let i = 0; i < arr.length; i++) {
    const y = k - arr[i];
    if (x.has(y)) return true;
    else x.add(arr[i]);
  }
  return false;
};

// method 3 with O(NlogN)
const solution3 = (arr, k) => {
  for (let i = 0; i < arr.length; i++) {
    const y = k - arr[i];
    const x = binarySearch(arr, y, 0, arr.length - 1);

    if (x === -1) continue;
    else if (x !== i) return true;
    else if (x - 1 >= 0 && x - 1 === y) return true;
    else if (x + 1 <= arr.length - 1 && x + 1 === target) return true;
  }
  return false;
};

const binarySearch = (arr, x, lo, hi) => {
  if (lo > hi) return -1;

  const mid = Math.floor((lo + hi) / 2);

  if (arr[mid] === x) return mid;

  if (arr[mid] > x) return binarySearch(arr, x, lo, mid - 1);
  else return binarySearch(arr, x, mid + 1, hi);
};

const arr = [10, 15, 3, 17];
const arr2 = [10, 15, 3, 7];
const k = 17;

const x1 = solution(arr, k);
console.log(x1);
const x2 = solution2(arr2, k);
console.log(x2);
const x3 = solution3(arr, k);
console.log(x3);
