// 18. Fibonacci
// Implement a function that returns the fibonacci number at a given index.

// describe("Fibonacci", () => {
//  it("Should implement fibonacci", () => {
//   assert.equal(fibonacci(1), 1);
//   assert.equal(fibonacci(2), 1);
//   assert.equal(fibonacci(3), 2);
//   assert.equal(fibonacci(6), 8);
//   assert.equal(fibonacci(10), 55);
//  });
// });

findFibIndex = (index) => {
    let fibArr = [0, 1];
     
    for (let i=1; i < index; i++) {
      let lastNum = fibArr[fibArr.length-1];
      let secondToLastNum = fibArr[fibArr.length-2];
      fibArr.push(lastNum+secondToLastNum);
    }
    console.log(fibArr);
    return(fibArr[fibArr.length-1]);
   }
   
   findFibIndex(8);