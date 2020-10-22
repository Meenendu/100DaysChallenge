// The Sieve of Eratosthenes is an algorithm used to generate all prime numbers smaller than N. The method is to take increasingly larger prime numbers, and mark their multiples as composite.

// For example, to find all primes less than 100, we would first mark [4, 6, 8, ...] (multiples of two), then [6, 9, 12, ...] (multiples of three), and so on. Once we have done this for all primes less than N, the unmarked numbers that remain will be prime.

// Implement this algorithm.

function findPrimes(n) {
  const primes = new Array(n + 1).fill(true);

  for (let i = 2; Math.pow(i, 2) <= n; i++) {
    if (primes[i]) {
      for (let j = Math.pow(i, 2); j <= n; j = j + i) {
        primes[j] = false;
      }
    }
  }

  for (let i = 2; i <= n; i++) {
    if (primes[i]) console.log(i);
  }
}

const n = 7;
findPrimes(n);
