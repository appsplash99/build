/* 1.  
Write a program to add 5 numbers. 
The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.*/
const addFiveNums = (a, b, c, d, e) => {
  return a + b + c + d + e
}
console.log(addFiveNums(1, 2, 3, 4, 5))


/* 2.  
Write a program to take a number input from user and 
determine whether the number is odd or even.*/
let readlineSync = require('readline-sync'); 
let userNum = readlineSync.question('Enter a Number: ');
console.log(`Entered number: ${userNum} is ${userNum%2!==0 ? 'Odd': 'Even'}`);

/* 3.
Write a program to find the maximum and minimum out of two given numbers. 
The numbers are num1=129 and num2=251.*/
const maxOfTwo = (a, b) => {
  return a>b ? a : b
}
console.log(maxOfTwo(129, 251))

/* 4.
Write a program to find the maximum out of three given numbers.
The numbers are num1=8, num2=23 and num3=17.*/
const maxOfThree = (a, b, c) => {
  return a>b && a>c ? 
    a : b>c && b>a ?
      b : c
}
console.log(maxOfThree(8, 23, 17))

/* 5.
Write a program to find the minimum out of three given numbers.
The numbers are num1=35, num2=29 and num3=46.*/
const minOfThree = (a, b, c) => {
  return a<b && a<c ? 
    a : b<c && b<a ?
      b : c
}
console.log(minOfThree(35, 29, 46))

/*6.
Write program to take a month as an input from the user and 
find out whether the month has 31 days or not.*/
const takeUSerInp = () => {
  // // returns string as 19/05/3214
  let readlineSync = require('readline-sync');
  return userDate = readlineSync.question('Enter a B\'day Date as [dd/mm/yy]: ');
}
const daysInMonth = (userDate) => {
  return userDate.split('/')[1] in [1, 3, 5, 7, 8, 10, 12] ?
    "Month has 31 days" : "Month does not have 31 days"
}
console.log(daysInMonth(takeUSerInp()))