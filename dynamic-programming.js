// Dynamic programming breaks down the problem into smaller and yet smaller possible sub-problems.
// These sub-problems are not solved independently. Rather, results of these smaller sub-problems are remembered and used for similar or overlapping sub-problems.
// *important concept* video about memoization

// memoization example with fibonacci sequence

function fib(n, prevValues = []) {
  if (prevValues[n] != null) {
    return prevValues[n]
  }
  let result

  if (n <= 2) {
   return 1
  } else {
    return fib(n - 1, prevValues) + fib(n-2, prevValues)
  }
  prevValues[n] = result
  return result
}




// bottom up
// In this approach, we first analyze the problem and see the order in which the sub-problems are solved.We start by solving the trivial sub problem and build up towards the given problem.





// top down
// In this approach, we start solving the given problem by breaking it down. If you see that a given sub problem has been solved already, then just return the stored solution.
