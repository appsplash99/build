/*1.
Given an array, your function should return the length of the array.
Example:
Input: arrayLength([1,5,3,7,8]) ––> Output: 5 */
// const arrayLength = (arr) => {
//   let len = 0;
//   while (arr[len] !== undefined) {
//     len++;
//   }
//   return len;
// }
// console.log(arrayLength([1,5,3,7,8]))
// #########################################
// #### TODO: CONFIRM if correct or NOT? ###
// #########################################


/*2.
Given an array and an item, your function should return the index at which the item is present.
Example:
Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2*/
// const indexOf = (arr, item) => {
//   let indexCount = 0;
//   while(arr[indexCount] !== undefined) {
//     if (arr[indexCount]=== item) {
//       return indexCount
//     }
//     indexCount++;
//   }
//   return "item not found"
// }
// console.log(indexOf([1,6,3,5,8,9], 3))


/*3.
Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
Example:
Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]*/
// const replace = (arr, n1, n2) => {
//   return arr.map(i => i===n1 ? n2 : i)
// }
// console.log(replace([1,5,3,5,6,8], 5, 10))


/*4.
Given two arrays, your function should return single merged array.
Example:
Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]*/
// const mergeArray = (arr1, arr2) => {
//   let totalLen = arr1.length + arr2.length;
//   let finalArr = [];
//   for (let i=0; i<totalLen; i++) {
//     if (arr1[i]) {
//       finalArr[i] = arr1[i]
//     }
//     if (arr2[i]) {
//       finalArr[arr1.length + i] = arr2[i]
//     }
//   }
//   return finalArr
// }
// console.log(mergeArray([1,3,5], [2,4,6]))


/*5.
Given a string and an index, your function should return the character present at that index in the string.
Example:
Input: charAt("neoGcamp", 4) ––> Output: c*/
// const charAt = (str, itemIndex) => {
//   return str[itemIndex]
// }
// console.log(charAt("neoGcamp", 4))
// #########################################
// #### TODO: CONFIRM if correct or NOT? ###
// #########################################


/*6.
Given two dates, your function should return which one comes before the other.
Example:
Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021 */
// const minDate = (d1, d2) => {
//   let [d1DD, d1MM, d1YY] = d1.split('/');
//   let [d2DD, d2MM, d2YY] = d2.split('/');
//   // first conditional level checks YEAR
//   if (d2YY < d1YY) {
//     return d2;
//   } else if (d2YY > d1YY) {
//     return d1;
//   } else {
//     // second conditional level checks MONTH 
//     if (d2MM < d1MM) {
//       return d2;
//     } else if (d2MM > d1MM) {
//       return d1;
//     } else {
//       // third conditional level checks DAY 
//       if (d2DD < d1DD) {
//         return d2;
//       } else if (d2DD > d1DD) {
//         return d1;
//       } else {
//         return "Both dates are same"
//       }
//     }
//   }
// }
// console.log(minDate('01/05/2021', '02/01/2021'))










