let range = [];

function makeRange(endNum) {
  for (let i = 2; i <= endNum; i++) {
    range.push(i);
  }
}

function getPrimes() {
  let primes = [];

  while (range.length > 0) {
    let nextPrime = range.shift();
    primes.push(nextPrime);

    range = range.filter(function (num) {
      return num % nextPrime !== 0;
    });

    // console.log(range);
  }
  console.log(primes);
}

makeRange(10000);
getPrimes();