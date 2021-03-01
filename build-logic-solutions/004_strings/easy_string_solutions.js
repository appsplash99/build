/*1.
Write a program that converts the string into uppercase*/
// const strUp = (str) => str.tpUpperCase()

/*2.
Write a program that reads two strings and append first string to the second. 
So if first string is Good second string is Morning, the program should print MorningGood*/
// const joinStr = (a, b) => a+b

/*3.
Program that reads string and count number of characters present in the string*/
// const strLen = (str) => {
//   let length = 0;
//   while (str[length]) {
//     length++;
//   }
//   return length;
// }
// console.log(strLen("COOL"))


/*4.
Write a program that converts string like "124" to 124*/
// const convString = (str) => {}
// console.log("cool")
// #########
// # TODO: #
// #########


/*5.
Write a program to delete all vowels from a string. 
Assume string is not more than 80 characters long*/
// const noVowels = (str) => {
//   const VOWELS = ['a', 'e', 'i', 'o', 'u'];
//   let newStr = "";
//   for (let i=0; i<str.length; i++) {
//     // console.log(str[i])
//     if (!(VOWELS.indexOf(str[i]))) {
//       // console.log(newStr)
//       newStr+=str[i]
//     }
//   }
//   return newStr;
// }
// console.log(noVowels("I am Apurv"))
// ##################
// # TODO: Solve #
// ##################


/*6.
Write a program to check whether the string is alphanumeric or not , eg:batman@45 contains digit 45*/
// ##################
// # TODO: Solve #
// ##################


/*7.
A program that reads three strings and prints the longest and smallest one*/
// const extermeStrings = (a, b, c) => {
//   return `Longest String is: ${Math.max(a.length, b.length, c.length)}\n Shortest String is: ${Math.min(a.length, b.length, c.length)}`
// }


/*8.
A program that counts number of vowels and consonants in a String?*/
// const numOfVandC = (str) => {

// }
// ##################
// # TODO: Solve #
// ##################


/*9.
Write a program which receives a string str that calculates the length of a string and return true if the length is greater than 7 without using strlen()*/
// const strLen = (str) => {
//   let length = 0;
//   while (str[length]) {
//     length++;
//   }
//   return length>7;
// }


/*10
Write a program that takes two strings and copies smaller string into bigger string*/
// ##################
// # TODO: Solve #
// ##################


/*11.
Given a string, determine if it is a palindrome, considering only alphanumeric characters*/
// ##################
// # TODO: Solve #
// ##################


/*12.
For a given input string(str), 
write a function to print all the possible substrings.Without using substr method */
// #################
// ## TODO: Solve ##
// #################


/*13.
Write a program that removes the time from the given date string "Wed April 15, 7pm". It should return only the date without the time. */
// #################
// ## TODO: Solve ##
// #################


/*14.
Write a program that masks all but last four characters of the string "5565534276455423" to '#'*/
// const maskLastFour = (str) => {
//   // console.log(str.length)
//   let newStr = "";
//   for (let i=0; i<str.length; i++) {
//     str.length-i-1<4 ?
//       newStr+='#': newStr+=str[i]
//   }
//   return newStr;
// }
// console.log(maskLastFour("5565534276455423"))


/*15.
Given a string "tic tac toe is a fun game" convert the first 6 characters to capital case*/
// const capFirstSixChars = (str) => {
  
// }
// console.log(capFirstSixChars("tic tac toe is a fun game"))
// #################
// ## TODO: Solve ##
// #################







