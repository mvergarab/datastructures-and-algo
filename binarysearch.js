// it has a O(logN) time complexity

// space complexity is O(1) considering we have to use an array in order to apply this algo

let arr = [1, 3, 5, 7, 8, 9];

// the array of number needs to be SORTED and it uses a "divide and conquer approach"


// ----------------- [RECURSIVE WAY] --------------------------------

let recursiveFunction = function (arr, x, start, end) {

  // base condition
  if (start > end) return false;

  // find the middle index
  let mid = Math.floor((start + end) / 2);

  // compare mid with given key x
  if (arr[mid] === x) return true;

  if (arr[mid] > x )
    return recursiveFunction(arr, x, start, mid-1);
  else
    return recursiveFunction(arr, x, mid + 1, end);

}
// --------------------- O -----------------------------------------

// ----------------- [ITERATIVE WAY] -------------------------------

let iterativeFunction = function (arr, x) {

  let start = 0, end = arr.length - 1;

  while (start <= end) {

    // find the mid index
    let mid = Math.floor((start + end) / 2);

    // if element is present at mid, return  True
    if (arr[mid] === x) return true;

    if (arr[mid] < x)
      start = mid + 1;
    else
      end = mid - 1;
  }

  return false;

}

// --------------------- O -----------------------------------------






// --------------------- O -----------------------------------------
