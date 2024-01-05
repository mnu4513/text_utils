// ========================================
// find an element with maximum frequency in an array

// const array = [1,2,3,1,2,3,4,1,2, 3,4,5,5,2,3,4,2,3,4,23,2,1,3,432,3,42,43,2,23,4,5];
// function freq (ar) {
//     const map = new Map();
//     for (let i = 0; i < ar.length; i++) {
//         const x = ar[i];
//         if (map.has(x)) {
//             map.set(x, map.get(x) + 1);
//         } else {
//             map.set(x, 1);
//         };
//     };

//     let maxFreq = 0;
//     let result = ar[0];
//     map.forEach((value, key) => {
//         if (value > maxFreq) {
//             result = key;
//             maxFreq = value;
//         } else if (value == maxFreq) {
//             if (result < key) {
//                 result = key;
//             };
//         };
//     });
//     return result; 
// };
// console.log(freq(array));


// =============================================
// we have given an array and we have to find out the duplicate valus in that given array and have return a new array with duplicate elements 
// const ar = [1, 2, 2, 3, 4, 5, 5, 6, 5, 5, 3, 3, 7, 8, 9, 9];
// // result = [2,3,5,9];
// function duplicate(ar) {
//     const map = new Map();
//     for (let i = 0; i < ar.length; i++) {
//         const x = ar[i];
//         if (map.has(x)) {
//             map.set(x, map.get(x) + 1);
//         } else {
//             map.set(x, 1);
//         };
//     };

//     const result = [];
//     map.forEach((value, key) => {
//         if (value > 1) {
//             result.push(key);
//         };
//     });
//     return result;
// };
// console.log(duplicate(ar));



// ========================================================
// We have given an array and a target number, we have to find out the numbers of the pairs of tow elements, whose sum is equalent to the given target 
// const array = [2,3,4,5,6,7, 9,0,8,8,1,1,1,1,1,1,8,8,8,8,8,8];
// const target = 9;
// function find (ar) {
//     const map = new Map();
//     let n = 0;
//     for (let i = 0; i < ar.length; i++) {
//         const x = ar[i];
//         if (map.has(target - x)) {
//             n += map.get(target - x);
//         };
//         if (map.has(x)) {
//             map.set(x, map.get(x) + 1);
//         } else {
//             map.set(x, 1);
//         };
//     };
//     return n;
// };
// console.log(find(array, target));



// =================================================
// Fizz Buzz (leetcode 412)
// function fizzBuzz (n) {
//     const result = [];
//     for (let i = 1; i <= n; i++) {
//         if (i % 15 == 0) {
//             result.push('Fizz Buzz');
//         } else if (i % 5 == 0) {
//             result.push('Buzz');
//         } else if (i % 3 == 0) {
//             result.push('Fizz');
//         } else {
//             result.push(i);
//         };
//     };
//     return result;
// };
// console.log(fizzBuzz(16));










// ======================

var differenceOfSum = function(nums) {
    let eleSum = 0;
    for (let i = 0; i < nums.length; i++) {
        eleSum += nums[i];
    };

    const str = nums.join('');
    const digitArray = str.split('');
    console.log(digitArray);
    let digSum = 0;
    for (let i = 0; i < digitArray.length; i++) {
        digSum += +digitArray[i];
    };
    return Math.abs(eleSum - digSum);
};
let s = -Infinity

console.log(differenceOfSum([1,2,3,10,11,12]));