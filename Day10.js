// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. Find the minimum element in O(log N) time. You may assume the array does not contain duplicates.

// For example, given [5, 7, 10, 3, 4], return 3.

function findMinimum(arr, lo, hi) {
  if (arr.length === 1) return arr[0];

  if (arr[0] < arr[arr.length - 1])
    return `minimum element is ${arr[0]} at index ${0}`;

  if (hi < lo) return `minimum element is ${arr[lo]} at index ${lo}`;
  let mid = Math.floor((lo + hi) / 2);

  if (arr[mid] > arr[mid + 1])
    return `minimum element is ${arr[mid + 1]} at index ${mid + 1}`;

  if (arr[mid] < arr[mid - 1])
    return `minimum element is ${arr[mid]} at index ${mid}`;

  if (arr[mid] > arr[lo]) return findMinimum(arr, mid + 1, hi);
  else return findMinimum(arr, lo, mid - 1);
}

const arr = [1, 2, 3];
const min = findMinimum(arr, 0, arr.length - 1);
console.log(min);
