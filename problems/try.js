function curriedSum(numArgs) {
  // Your code here
  let numbers = [];
  let sum = 0;
  let index = 0;

  return function _curriedSum(num) {
    numbers.push(num);

    if (numbers.length === numArgs) {
        numbers.forEach(function(element) {
            sum += element;
        });

        return sum;
    } else {
        return _curriedSum;
    }
  }

}

// const sum = curriedSum(4); // returns a function
// sum(5); // returns a function
// sum(20) // returns a function
// sum(30) // returns a function
// //console.log(sum(20)); // => returns 75



const sum = curriedSum(3)(2)(1)(7); // => returns 10

console.log(sum);
