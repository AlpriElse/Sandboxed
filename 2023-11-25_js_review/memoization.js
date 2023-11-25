function fib(n) {
  if (n <= 1) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(2));
console.log(fib(6));

console.log("====== memoization practice =====");

const cache = new Map();
function memoizedFib(N) {
  function fib(n) {
    if (cache.has(n)) {
      return cache.get(n);
    }

    console.log(`calculating fib(${n})`);
    if (n <= 1) {
      return 1;
    }

    const result = fib(n - 1) + fib(n - 2);
    cache.set(n, result);
    return result;
  }

  return fib(N);
}

console.log(memoizedFib(1));
console.log(memoizedFib(5));
console.log(memoizedFib(5));

console.log("==== generalized memoization practice ====");

function memoize(func) {
  const cache = new Map();
  return (n) => {
    if (cache.has(n)) {
      return cache.get(n);
    }

    const result = func(n);
    cache.set(n, result);

    return result;
  };
}

function fib2(n) {
  console.log(`calculating fib2(${n})`);
  if (n <= 1) {
    return 1;
  }

  return fib2(n - 1) + fib2(n - 2);
}
const memoizedFib2 = memoize(fib2);
console.log(memoizedFib2(10));
console.log(memoizedFib2(10));

console.log("===== generalized memoization 2 =====");

function memoize(func) {
  const cache = new Map();

  return (...args) => {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = func.apply(this, args);

    cache.set(key, result);

    return result;
  };
}

const memoizedFib3 = memoize(fib2);

console.log(memoizedFib3(10));
console.log(memoizedFib3(10));
