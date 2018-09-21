const readline = require('readline');

reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIFGreaterThan(el1, el2, callback){
  reader.question(`Is ${el1} greater than ${el2}? Anwser yes or no.`, function(answer) {
    if (answer === 'yes') {
      callback(true);
    } else {
      callback(false);
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {

  if (i < arr.length - 1) {
    askIFGreaterThan(arr[i], arr[i+1], function (isGreaterThan) {
      if (isGreaterThan) {
          [arr[i], arr[i+1]] = [arr[i + 1], arr[i]];
          madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  }

  if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
    // console.log(arr);
  }
}
// function  outerBubbleSortLoop() {
//
// }

// innerBubbleSortLoop([4,1,3,2], 0, false, outerBubbleSortLoop);

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, madeAnySwaps = false, outerBubbleSortLoop);
    } else {
    sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
