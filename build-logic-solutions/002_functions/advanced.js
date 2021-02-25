/*1.
Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.*/
// const encodeString = (str, shiftNum) => {
//   for (let i=0; i<str.length; i++) {
//     let orig = str[i].charCodeAt(0) - 96;
//     console.log(str[i], orig)
//   }
// }
// encodeString("azA", 2)
// ####################
// #### TODO: SOLVE ###
// ####################

/*2.
Given a sentence, return a sentence with first letter of all words as capital.
Example:
Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers */
// const toSentenceCase = (str) => {
//   let newStr = "";
//   // start for index = 1
//   for (let i=1; i<str.length; i++) {
//     let prevChar = str[i-1];
//     // at zeroth index
//     if (i-1===0 && prevChar!== " ") {
//       newStr+=prevChar.toUpperCase()
//     }
//     // if prev char is space
//     if (prevChar === " ") {
//       newStr+=str[i].toUpperCase()
//     } else {
//       newStr+=str[i]
//     }
//   }
//   return newStr
// }
// console.log(toSentenceCase('we are neoGrammers'))


/*3.
Given an array of numbers, your function should return an array in the ascending order.
Example:
Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]*/
// ####################
// #### TODO: SOLVE ###
// ####################


/*4.
Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
Example:
Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen */
// const reverseCharactersOfWord = (str) => {
//   let finalArr = [];
//   let newArr = str.split(' ');
//   for (let item of newArr) {
//     let revWord = "";
//     for (let i=0; i<item.length; i++) {
//       revWord+=item[item.length-i-1]
//     }
//     finalArr.push(revWord)
//   }
//   return finalArr.join(' ')
// }
// console.log(reverseCharactersOfWord('we are neoGrammers'))







