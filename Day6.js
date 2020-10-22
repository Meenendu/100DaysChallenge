// Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
// Intervals can "touch", such as [0, 1] and [1, 2], but they won't be considered overlapping.
// For example, given the intervals (7, 9), (2, 4), (5, 8), return 1 as the last interval can be removed and the first two won't overlap.
// The intervals are not necessarily sorted in any order.

function solution(intervals) {
  const size = intervals.length;
  if (size <= 1) return 0;
  intervals.sort((a, b) => a[1] - b[1]);
  let x = 0;
  let remove = 0;
  for (let i = 1; i < size; i++) {
    if (intervals[x][1] > intervals[i][0]) remove++;
    else x = i;
  }
  return remove;
}

const x = [
  [7, 9],
  [2, 4],
  [5, 8],
];
const sol = solution(x);
console.log(sol);
