// There are N couples sitting in a row of length 2 * N. They are currently ordered randomly, but would like to rearrange themselves so that each couple's partners can sit side by side.

// What is the minimum number of swaps necessary for this to happen?

// Go through array, if have not seen this number before, save value and index location
// If seen before, check if they are adjacent by checking distance from current to previously known index
// Special case: even if they are adjacent, want them to be inside bucket, so if they cross boundary, swap.
// Ex: |A B|B C|A C| -> B's cross boundary -> |B B|A C|A C|
// When need to swap, swap the current index with the one NEXT to the previously known index, need to stay in bucket
// Ex: |A D|A B| -> |A A|D B| or |D A|B A| -> |A A|B D|
// ALSO need to update previously known index for the number being swapped to the current index
// Guaranteed maximum 2 swaps per number:
// Once when swapped forward from an earlier index to current index.
// Once backward if not equal to adjacent value or cross bucket boundary, won't get processed again

function findNoOfSwaps(arr) {
  const x = new Map();
  let swaps = 0;
  let i = 0;

  while (i < arr.length) {
    if (!x.has(arr[i])) {
      x.set(arr[i], i);
    } else if (
      i - x.get(arr[i]) > 1 ||
      (i % 2 === 0 && x.get(arr[i]) + 1 === i)
    ) {
      let prev = x.get(arr[i]);

      if (prev % 2 === 0) {
        x.set(arr[prev + 1], i);
        swap(i, prev + 1);
      } else {
        x.set(arr[prev - 1], i);
        swap(i, prev - 1);
      }
      swaps++;
    }
    i++;
  }
  console.log(swaps);
  console.log(arr);
}

function swap(a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

const arr = [1, 6, 2, 1, 2, 6];
findNoOfSwaps(arr);
