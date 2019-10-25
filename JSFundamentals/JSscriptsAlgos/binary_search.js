// Binary Search
// Objectives:
// Familiarity with binary search, a method of searching that greatly reduces 
//the time needed to find a value in a sorted array.
// Given an array of sorted numbers and a value (also a number), 
//return whether the array contains that value. Return the index position of the 
//value if it exists and -1 if it does not exist. 

// Do not sequentially iterate through the array. Take advantage of the fact 
//that the array is sorted and use a 'divide and conquer' technique. 
//Very similar to when we are searching for a word in a dictionary (the book kind) we may: 

// Start our search in the center and determine whether we need to search the back half or the front half. 
// Choose a spot around the center of the half of the array we still need to search.
// From here, determine which quarter of the array we still need to search. 
// In this way our search is very rapidly narrowed until we find out whether 
//the value we are searching for is in the array or not.


// We basically ignore half of the elements just after one comparison.

// Compare x with the middle element.
// If x matches with middle element, we return the mid index.
// Else If x is greater than the mid element, then x can only lie in right half 
// subarray after the mid element. So we recur for right half.
// Else (x is smaller) recur for the left half.

function BirarySearch(arr, num, left, right){  
    var mid = Math.floor((right+left)/2 );  
    if (right >= left){
        if (arr[mid] == num){
            console.log("The index of ",  num , " is: ", mid);
            return (mid);
        }
       // 3 < 5
        else if (num < arr[mid]){
            BirarySearch(arr, num, left, mid-1);         
        }
        else {
            BirarySearch(arr, num, mid+1, right); 
        }
    }    
    else {
        return (-1);
    }
}

var arr=[1,2,3,4,5,6,7,8,9,10];
var right = 0;
var left = arr.length;
num = 9;

BirarySearch(arr, num, right, left);
