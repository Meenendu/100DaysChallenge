// Determine whether there exists a one-to-one character mapping from one string s1 to another s2.
// For example, given s1 = abc and s2 = bcd, return true since we can map a to b, b to c, and c to d.
// Given s1 = foo and s2 = bar, return false since the o cannot map to two characters.

const findSolution = (a, b) => {
  if (a.length !== b.length) return false;

  const mapping = new Map();

  for (let i = 0; i < a.length; i++) {
    if (!mapping.has(a[i])) {
      mapping.set(a[i], b[i]);
    } else if (mapping.get(a[i]) !== b[i]) {
      return false;
    }
    console.log(mapping);
  }
  return true;
};

const a = "foo";
const b = "ana";
const sol = findSolution(a, b);
console.log(sol);
