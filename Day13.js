// Given a circular array, compute its maximum subarray sum in O(n) time. A subarray can be empty, and in this case the sum is 0.
// For example, given [8, -1, 3, 4], return 15 as we choose the numbers 3, 4, and 8 where the 8 is obtained from wrapping around.
// Given [-4, 5, 1, 0], return 6 as we choose the numbers 5 and 1.

function maxCircularSum(a, n) {
  if (n === 1) return a[0];

  // Initialize sum variable which store total sum of the array.
  const sum = a.reduce((a, x) => a + x);

  // Initialize every variable with first value of array.
  let curr_max = a[0],
    max_so_far = a[0],
    curr_min = a[0],
    min_so_far = a[0];

  // Concept of Kadane's Algorithm
  for (let i = 1; i < n; i++) {
    // Kadane's Algorithm to find Maximum subarray sum.
    curr_max = Math.max(curr_max + a[i], a[i]);
    max_so_far = Math.max(max_so_far, curr_max);

    // Kadane's Algorithm to find Minimum subarray sum.
    curr_min = Math.min(curr_min + a[i], a[i]);
    min_so_far = Math.min(min_so_far, curr_min);
  }

  if (min_so_far === sum) return max_so_far;

  // returning the maximum value
  return Math.max(max_so_far, sum - min_so_far);
}

const a = [-4, 5, 1, 0];
const n = a.length;
const sol = maxCircularSum(a, n);
console.log(sol);
