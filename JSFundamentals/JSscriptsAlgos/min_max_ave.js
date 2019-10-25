// Objectives:

// Iterate over an array
// Construct a string
// Use the return statement

// Write a function that takes an array of numbers as a parameter. 
// Find the maximum number, the minimum number, and the average of 
// all the numbers in the array. Return these values in a nicely 
// formatted string.

// Example: maxMinAvg([1, -2, 9, 4]) returns "The minimum is -2, 
// the maximum is 9, and the average is 3."


function maxMinAvg(arr){

    var sum = arr[0];
    var min = arr[0];
    var max = arr[0];

    for (i=1; i <arr.length ; i++){
        sum += arr[i];
        if (arr[i] <  min){
            min = arr[i];
        }
        if (arr[i] > max){
            max = arr[i]
        }
    }

    return ([min,max, sum/arr.length]);
}

result = maxMinAvg([1, -2, 9, 4]);

console.log("The minimum is: ", result[0]);
console.log("The max is: ", result[1]);
console.log("The average is: ", result[2]);

