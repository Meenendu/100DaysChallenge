// Suppose you are given two lists of n points, one list p1, p2, ..., pn on the line y = 0 and the other list q1, q2, ..., qn on the line y = 1. Imagine a set of n line segments connecting each point pi to qi.
// Write an algorithm to determine how many pairs of the line segments intersect.

function findIntersection(p, q) {
  let count = 0;
  if (p.length == 2) {
    if ((p[0] > p[1] && q[0] < q[1]) || (p[0] < p[1] && q[0] > q[1])) return 1;
    else return 0;
  }

  for (let i = 0; i < p.length - 1; i++) {
    for (j = i + 1; j < p.length; j++) {
      if ((p[i] > p[j] && q[i] < q[j]) || (p[i] < p[j] && q[i] > q[j])) {
        count += 1;
      }
    }
  }

  return count;
}

const p = [2, 4, 6, 7, 8, 9, 10];
const q = [2, 5, 4, 6, 7, 8, 1];

const intersections = findIntersection(p, q);
console.log(intersections);
