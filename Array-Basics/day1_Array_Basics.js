
/**
Write a function that capitalizes the first letter
of every word in a string
*/


function capitalizeWords(str) {
    const words = str.split(' ');
    let capitalizeWords = words.map(word => {
       return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizeWords.join(' ');
}

console.log(
  "capitalizeWords",
  capitalizeWords("i am learning javascript")
); // Expects "I Am Learning Javascript"


/**
Write a function that flattens a nested array
(one level deep)
*/


function flattenArray(arr) {
    return arr.flat();
}

console.log("flattenArray", flattenArray([1, [2, 3], [4], 5])); // Expects [1, 2, 3, 4, 5]


/**
Write a function that takes an array of numbers
and returns the sum of all elements
*/
function arraySum(arr) {
    let totalSum = 0;
    for(let i=0; i<arr.length; i++){
        totalSum +=arr[i];
    }
    return totalSum;
}

console.log("arraySum", arraySum([1, 2, 3, 4, 5])); // Expects 15


/**
Write a function that takes an array and returns a new array
with the elements in reverse order
*/
function reverseArray(arr) {
    let reversedArray = [];
    for(let i=arr.length -1; i>=0; i--){
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

console.log("reverseArray", reverseArray([1, 2, 3, 4])); // Expects [4, 3, 2, 1]

/**
Write a function that takes an array and a value,
and returns whether the value exists in the array
*/
function contains(arr, target) {
    return arr.includes(target) ? true: false;
}

console.log("contains", contains([10, 20, 30], 30)); // Expects true
console.log("contains", contains([10, 20, 30], 40)); // Expects false


/**
Write a function that removes all occurrences of a given value
from an array, returning the new array
*/
function removeElement(arr, numToRemove) {
    return arr.filter(element => element !== numToRemove);
}

console.log("removeElement", removeElement([1, 2, 3, 2, 4], 2)); // Expects [1, 3, 4]


/**
Write a function that takes an array of numbers and returns
the average of all elements
*/
function arrayAverage(arr) {
    const length = arr.length;
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum +=arr[i];
    }
    return (sum/length).toFixed(1);
}

console.log("arrayAverage", arrayAverage([2, 4, 6, 8])); // Expects 5

/**
Write a function that finds the maximum number in an array
*/
function getMax(arr) {
    let maxNum = arr[0];
    for(let i= 0; i<arr.length; i++){
        if(maxNum < arr[i]){
            maxNum = arr[i];
        }
    }
    return maxNum;
}

console.log("getMax", getMax([7, 1, 9, 3, 6])); // Expects 9


/**
Write a function that takes an array and returns a new array
with duplicate values removed
*/
function removeDuplicates(arr) {
   const unique = [...new Set(arr)];
   return unique;
}

console.log("removeDuplicates", removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 
// Expects [1, 2, 3, 4, 5]

/**
Write a function that takes two arrays and merges them
into a single array
*/
function mergeArrays(arr1, arr2) {
    let mergedArrays = arr1.concat(arr2);
    return mergedArrays;
}

console.log("mergeArrays", mergeArrays([1, 2, 3], [4, 5, 6])); 
// Expects [1, 2, 3, 4, 5, 6]





//Medium difficulty question
/**
Write a function that rotates an array to the right
by k steps
*/
function reverse(arr, start, end) {
    while(start < end){
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

function rotateArray(arr, k) {
    k = k % arr.length;
    arr.reverse();
    reverse(arr, 0, k - 1);
    reverse(arr, k, arr.length - 1);
    return arr;
}

console.log("rotateArray", rotateArray([1, 2, 3, 4, 5], 2)); 
// Expects [4, 5, 1, 2, 3]


/**
Write a function that checks if an array is a palindrome
(the same forward and backward)
*/
function isArrayPalindrome(arr) {
    let invertedArray = [];
    for(let j = arr.length - 1; j>-1; j--){
        invertedArray.push(arr[j]);
    }
    /* we cannot compare the arrays directly using the usual equals operator because Javascript arrays have type object, so it can be done 
    either by converting the JSON or using .toString().
    */
    // return arr.toString() === invertedArray.toString() ? true: false; OR
    return JSON.stringify(arr) === JSON.stringify(invertedArray);
}

console.log("isArrayPalindrome", isArrayPalindrome([1, 2, 3, 2, 1])); // Expects true
console.log("isArrayPalindrome", isArrayPalindrome([1, 2, 3, 4])); // Expects false


/**
Write a function that finds the second largest number
in an array
*/
function secondLargest(arr) {
    //First need to remove duplicates and sort
    const sortedDistinctArray = [...new Set(arr)].sort((a, b) => a - b);
    return sortedDistinctArray[arr.length - 2];   //Since to get to the index of 45 which is at second last index
}

console.log("secondLargest", secondLargest([10, 20, 4, 45, 99])); // Expects 45


/**
Write a function that takes two sorted arrays and returns
a new sorted array containing all elements from both
*/
function mergeSortedArrays(a, b) {
    //combining two arrays:
    return a.concat(b).sort((a, b)=> a - b);
    //OR
    const mergedArrays = a.concat(b);
    return mergedArrays.sort((a, b) => a - b);
}

console.log("mergeSortedArrays", mergeSortedArrays([1, 3, 5], [2, 4, 6])); 
// Expects [1, 2, 3, 4, 5, 6]


/**
Write a function that removes duplicates from a sorted array
in-place and returns the new length
*/
function removeDuplicatesSorted(arr) {
    const duplicatesRemovedArray = [...new Set(arr)];
    return duplicatesRemovedArray;
}

console.log("removeDuplicatesSorted", removeDuplicatesSorted([1, 1, 2, 2, 3, 4, 4])); 
// Expects 4 (array modified to [1, 2, 3, 4])


/**
Write a function that returns the index of the first occurrence
of a target element in an array, or -1 if not found
*/
function indexOfElement(arr, target) {
   for(let i = 0; i< arr.length; i++){
    if(arr[i] === target){
        return i;
    }
   }
   return -1;
}

console.log("indexOfElement", indexOfElement([5, 3, 7, 1, 3], 3)); // Expects 1
console.log("indexOfElement", indexOfElement([5, 3, 7, 1, 3], 9)); // Expects -1

/**
Write a function that takes an array of 0s and 1s
and returns the maximum number of consecutive 1s
*/
//sliding window problem
function maxConsecutiveOnes(arr) {
    let currentCount = 0;
    let l = 0;
    for(let i=0; i< arr.length; i++){

    }
}

console.log("maxConsecutiveOnes", maxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // Expects 3


 