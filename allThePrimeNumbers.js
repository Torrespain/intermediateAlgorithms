// 17. For a given number, find all the prime numbers from zero to that number.

// describe("Sieve of Eratosthenes", () => {
//  it("Should return all prime numbers", () => {
//   assert.deepEqual(primes(10), [2, 3, 5, 7]);
//  });
// });

result=[];

checkPrime = (num) => {
  let prime= true;
  for (i=2; i<num; i++) {
    if (num%i===0) {
      prime=false;
    }
  }
  makeArray(num, prime);
  if (num>1) {
    num--;
    checkPrime(num);
  }
  return result;
}

makeArray = (num, prime) => {
  if (prime) {
    result.push(num);
  }
}

checkPrime(13)