
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
