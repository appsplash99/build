/*1. 
Write a program to input 2 numbers and display the sum of the numbers to the console.
Input Number 1: 20
Input Number 2: 40
Sum : 60*/
// let readlineSync = require('readline-sync');
// let num1 = Number(readlineSync.question('Input Number 1: '));
// let num2 = Number(readlineSync.question('Input Number 2: '));
// let ans = Number(num1) + Number(num2)
// console.log('Sum : ' + ans );


/*2.
Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest

Input: P=100, R=6%, T=2
Output: 12*/
// let readlineSync = require('readline-sync');
// let p = Number(readlineSync.question('P(principal amount) = '));
// let r = Number(readlineSync.question('R(rate)% = '));
// let t = Number(readlineSync.question('T(time) = '));
// let si = (p * r * t) / 100
// console.log('SI(simple interes) = ' + si );


/*3.
Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.
Formula : 0.5 * m * v * v*/
// const kinEnergy = (m, v) => 0.5*m*v**2
// console.log(kinEnergy(5, 20))


/*4. 
Write a program to convert Fahrenheit to Celsius. For Celsius to Fahrenheit conversion use: T = 9*T/5 + 32 'T' is the temperature on the Celsius scale.
Input: 56
Output: 13.33333*/
// #########
// # TODO: #
// #########



/*5.
Calculate the area, perimeter of a s1.re of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.

Formula :

Area: a*a

Perimeter: 4*a

Surface Area: 6*a*a

Volume: a*a*a*/
// #########
// # TODO: #
// #########



/*6. 
Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.

Input: CP = 1500, SP = 2000
Output: 500 Profit

Input: CP = 3125, SP = 1125
Output: 2000 Loss*/
// #########
// # TODO: #
// #########


/*7.
Write a program to calculate sum of N natural digits, as input by the users?

Enter a positive integer: 100
Sum = 5050*/
// const sumOfNnums = (n) => {
//   let count = 0;
//   while (n>0) {
//     count+=n
//     n--;
//   }
//   return count;
// }
// console.log(sumOfNnums(100))


/*8.
Write a Program to Print N Odd Number in Descending Order.

Input : 4
Output :  1
          3
          5
          7*/
// const printNOddNums = (n) => {
//   let primeNumsCount = 0;
//   let counter = 0;
//   while (primeNumsCount !== n) {
//     if (counter%2!==0) {
//       console.log(counter);
//       primeNumsCount++;0
//     }
//     counter++;
//   }
// }
// console.log(printNOddNums(4))


/*9. 
Write a JavaScript program to compute the sum of all digits that occur in a given string.

Input: 1234
Output: 1+2+3+4 = 10*/
// const sumAllDigits = (num) => {
//   let numStr = String(num);
//   let total = 0
//   let counter = 0
//   while (counter < numStr.length) {
//     total+=Number(numStr[counter])
//     counter++
//   }
//   return total;
// }
// sumAllDigits(1234)


/*10.
Write a JavaScript program that reverses a number.
Example:
Input:  32243;
Output:  34223*/
// const revString = (str) => {
//   let newStr = String(str)
//   let final = "";
//   for (let i=1; i<=newStr.length; i++) {
//     final+=newStr[newStr.length - i];
//   }
//   return final;
// }
// console.log(revString(12345))


/*11.
Write a Program to cyclically Rotate a Number by X positions in the left direction, as provided by the user.
Example-
Enter a Number : 1234
Enter the Number of Rotations : 2
Output : 3412*/
// let readlineSync = require('readline-sync');
// const rotateCyclically = () => {
//   let num = readlineSync.question('Enter a Number : ');
//   let rotations = readlineSync.question('Enter the Number of Rotations : ');
//   let numArr = String(num).split('');
//   for (let i=1; i<=rotations; i++) {
//     let currentFirstElement = numArr.shift()  // removing first element
//     numArr.push(currentFirstElement)// appending first element
//   }
//   return 'Rotated Number: ' + numArr.join('')
// }
// console.log(rotateCyclically())


/*12.
Write a Program to convert Decimal to Binary.

Enter the number to convert: 5
Binary of Given Number is=101*/
// #########
// # TODO: #
// #########







