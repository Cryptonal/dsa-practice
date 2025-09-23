
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
    let maximumCount = 0;
    let currentCount = 0;

    for(let i = 0; i< arr.length; i++){
        if(arr[i]===1){
            currentCount += 1;
            maximumCount = Math.max(maximumCount, currentCount); 
        } else {
            currentCount = 0;
        }
    }
    return maximumCount;
}


console.log("maxConsecutiveOnes", maxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // Expects 3


 /**
  * Given an integer array, find a maximum product of a triplet in the array.
 */
function maximumProductTriplet(arr){

    if (arr.length < 3) return null;

    let maxProduct = -Infinity;

    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                let product = arr[i] * arr[j] * arr[k];
                if (product > maxProduct) {
                    maxProduct = product;
                }
            }
        }
    }

    return maxProduct;

}

 console.log("Maximum Product of triplet", maximumProductTriplet([10, 3, 5, 6, 20])); // Expects 1200
 console.log("Maximum Product of triplet", maximumProductTriplet([-10, -3, -5, -6, -20])); //Expects -90
 console.log("Maximum Product of triplet", maximumProductTriplet([1, -4, 3, -6, 7, 0])); //Expects 168


 /*
 Input: arr[] = [16, 17, 4, 3, 5, 2]
Output: [17 5 2]
Explanation: 17 is greater than all the elements to its right i.e., [4, 3, 5, 2], therefore 17 is a leader. 
5 is greater than all the elements to its right i.e., [2], therefore 5 is a leader. 
2 has no element to its right, therefore 2 is a leader.

 **/


function leader(arr){
    const result = [];
    const n = arr.length;

    let maxRight = arr[n - 1];
    result.push(maxRight);

    for(let i = n - 2; i>=0; i--){
        if(arr[i] >= maxRight){
            maxRight = arr[i];
            result.push(maxRight);
        }
    }
    result.reverse();

    return result;
}

const arr = [16, 17, 4, 3, 5, 2];

console.log('Leaders array is: ', leader(arr));



/**
 * 1. Find the Maximum Subarray Sum (Kadane’s Algorithm)
Problem: Given an array of integers, find the contiguous subarray with the largest sum.
*/
function maxSubArray(nums){
    let max_sum = 0;
    let current_sum = 0;
    for (num of nums){
        current_sum = Math.max(num, current_sum + num);
        max_sum = Math.max(max_sum, current_sum);
    }

    return max_sum;

}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log('Contiguous sub array with Largest sum:', maxSubArray(nums)); //expected Output: 6

/**
 * Given a non-negative number represented as an array of digits. 
 * The task is to add 1 to the number (increment the number represented by the digits by 1). 
 * The digits are stored such that the most significant digit is the first element of the array.
 * **/


function plusOne(digits) {
  // Create a copy to avoid mutating the original array
  const resultArray = [...digits];
  
  for (let i = resultArray.length - 1; i >= 0; i--) {
    if (resultArray[i] < 9) {
      resultArray[i]++;
      // Convert array to number
      return parseInt(resultArray.join(''));
    }
    resultArray[i] = 0;
  }
  
  resultArray.unshift(1);
  // Convert array to number
  return parseInt(resultArray.join(''));
}

const a = [1, 2, 4];
const b = [9, 9, 9];

console.log('Result of added 1 to an array number is: ', plusOne(a));


/**
 * Given an array of integers arr[], move all the zeros to the end of the array 
 * while maintaining the relative order of all non-zero elements.
*/

function pushZerosToEnd(zeroArr) {
    const n = zeroArr.length;
    const temp = new Array(n);

    // to keep track of the index in temp[]
    let j = 0;

    // Copy non-zero elements to temp[]
    for (let i = 0; i < n; i++) {
        if (zeroArr[i] !== 0) {
            temp[j++] = arr[i];
        }
    }

    // Fill remaining positions in temp[] with zeros
    while (j < n)
        temp[j++] = 0;

    // Copy all the elements from temp[] to arr[]
    for (let i = 0; i < n; i++)
        zeroArr[i] = temp[i];

    return zeroArr.join(" ");
}

const zeroArr = [1, 2, 0, 4, 3, 0, 5, 0];
console.log('New array with zeros shifted to right', pushZerosToEnd(zeroArr));  //expected []


/**
 * Given an unsorted array arr[] of size n, containing elements from the range 1 to n, 
 * it is known that one number in this range is missing, and another number occurs 
 * twice in the array, find both the duplicate number and the missing number.
 * **/

function findTwoElement(dupArr) {
    let n = dupArr.length;

    // frequency array to count occurrences
    let freq = new Array(n + 1).fill(0);
    let repeating = -1, missing = -1;

    // count frequency of each element
    for (let i = 0; i < n; i++) {
        freq[dupArr[i]]++;
    }

    // identify missing and repeating numbers
    for (let i = 1; i <= n; i++) {
        if (freq[i] === 0) missing = i;
        else if (freq[i] === 2) repeating = i;
    }

    return [repeating, missing];
}

const dupArr = [4, 3, 6, 2, 1, 1];
console.log('Duplicates are:', findTwoElement(dupArr));  //Expected [1, 5]


/**
 * Given an array prices[] representing stock prices, find the maximum total profit 
 * that can be earned by buying and selling the stock any number of times.
 * **/

/**
 * Input: prices[] = [100, 180, 260, 310, 40, 535, 695]
Output: 865
Explanation: Buy the stock on day 0 and sell it on day 3 = 310 - 100 = 210 and 
Buy the stock on day 4 and sell it on day 6 = 695 - 40 = 655 so the 
Maximum Profit  is = 210 + 655 = 865.
 * **/
function maxProfitRec(price, start, end){
    let res = 0;

    // Try every possible pair of buy (i) and sell (j)
    for (let i = start; i < end; i++) {
        for (let j = i + 1; j <= end; j++) {
            // Valid transaction if selling price > buying price
            if (price[j] > price[i]) {
                let curr = (price[j] - price[i]) +
                           maxProfitRec(price, start, i - 1) +
                           maxProfitRec(price, j + 1, end);
                res = Math.max(res, curr);
            }
        }
    }
    return res;
}

function maxProfit(prices){
    return maxProfitRec(prices, 0, prices.length - 1);
}


let prices = [100, 180, 260, 310, 40, 535, 695]

console.log('Maximum profit that can be earned:', maxProfit(prices));  //Expected 865