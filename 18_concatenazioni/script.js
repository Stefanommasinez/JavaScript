function memoize(fn) {
  let cache = {};  
  return function (n) {
    if(fn(n) in cache) {
      return fn(n);
    } else {
     return cache.factor = fn(n);
    }
  }
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }
  return x * factorial(x - 1);
}


factorial = memoize(factorial);
console.log(factorial(10));
console.log(factorial(6));
console.log(factorial(5));