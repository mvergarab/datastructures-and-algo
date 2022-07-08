// here the complete article about sorting algo https://www.section.io/engineering-education/sorting-algorithms-in-js/#sorting-algorithms


// Bubble Sort
// follows the recursion technique
// start by comparing the first two elements in an array
// swap the if required
// time complexity Big O (n 2)
// space complexity Big O (1)
// ascending order

function bubbleSort(arr){

  //Outer pass
  for(let i = 0; i < arr.length; i++){

      //Inner pass
      for(let j = 0; j < arr.length - i - 1; j++){

          //Value comparison using ascending order

          if(arr[j + 1] < arr[j]){

              //Swapping
              [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
          }
      }
  };
  return arr;
};

console.log(bubbleSort([5,3,8,4,6]));


// Insertion sort
// portion of the array is sorted and the other is unsorted
// time complexity Big O (n 2)
// space complexity Big O (l)
// ascending order

function insertionSort(arr){
  //Start from the second element.
  for(let i = 1; i < arr.length;i++){

      //Go through the elements behind it.
      for(let j = i - 1; j > -1; j--){

          //value comparison using ascending order.
          if(arr[j + 1] < arr[j]){

              //swap
              [arr[j+1],arr[j]] = [arr[j],arr[j + 1]];

          }
      }
  };

return arr;
}

console.log(insertionSort([23, 1, 10, 5, 2]));

//------------------------------- 0 --------------
// Selection sort

function selectionSort(arr) {
  let min;

  //start passes.
  for (let i = 0; i < arr.length; i++) {
    //index of the smallest element to be the ith element.
    min = i;

    //Check through the rest of the array for a lesser element
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    //compare the indexes
    if (min !== i) {
      //swap
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
}

console.log(selectionSort([29, 72, 98, 13, 87, 66, 52, 51, 36]));

//------------------------------- 0 --------------
// Merge
// divide and conquer  approach



// quicksort
