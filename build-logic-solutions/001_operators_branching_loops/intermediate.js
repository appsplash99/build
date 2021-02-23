/*1. 
Fizzbuzz - Write a program to return an array from 1 to 100. 
But for every multiple of 3, replace the number with "Fizz", 
for every multiple of 5, replace the number with "Buzz" and 
for every multiples of 3 & 5, replace with "FizzBuzz".

Your output should look something like this:
1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 .....
*/
// ES6 shorthand to create an array of 0 to N integers
// [...Array(100).keys()]
const fizzBuzz = (length) => {
  let arr = [];
  for (let i=1; i<=length; i++) {
    // three condition evaluation
    i%3===0 && i%5===0 ? 
      arr.push("FizzBuzz") : i%3===0 ?
        arr.push("Fizz") : i%5===0 ?
          arr.push("Buzz") : arr.push(i)
  }
  return arr;
}
console.log(fizzBuzz(100))


/*2. 
Print the following star pattern :-
* 
* * 
* * * 
* * * * 
* * * * *
*/
const printStars = (lines) => {
  // long string like "*\n* **\n"
  let finalStr = ""   
  for (let i=1; i<=lines; i++) {  
    // stars on each line "***"
    let stars = ""  
    for (let j=1; j<=i; j ++) {
      stars+="*"
    }
    // console.log(stars)
    finalStr+=stars+'\n'
  }
  return finalStr
}
console.log(printStars(5))


/*3. 
Write a program to take a number input from user and 
print multiplication table 12 times for that number.*/
const userInp = () => {
  let readlineSync = require('readline-sync');
  return userNum = readlineSync.question('Enter a Number: ');
}
const printMathTable = (userNum) => {
  let finalStr = `Multiplication Table for ${userNum} \n`
  for (let i=1; i<=12; i++ ) {
    finalStr+=`\t${userNum} x ${i} = ${userNum*i}\n`
  }
  return finalStr
}
printMathTable(userInp())

/*4.
Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....*/
// ###################################
// #### does not work TODO: fix ######
// ###################################
// const fibonacciSeries = (length) => {
//   let finalArr = [];
//   let accum = 0;
//   for (let i=0; i<=length; i++) {
//     // accum += i-1 + i-2;
//     // console.log(accum)  
//     console.log(i-1 + i-2)
//   }
//   // return finalArr;
// }
// // console.log(fibonacciSeries(10))
// fibonacciSeries(10)


/*5.
Write a program to take an input from a user and 
find its Factorial. Example: Factorial of 5 is 120*/
const userInp = () => {
  let readlineSync = require('readline-sync');
  return userNum = readlineSync.question('Enter a Number: ');
}
const printFactorial = (userNum) => {
  let reducer = userNum;
  let factorial = 1;
  while (reducer >=1 ) {
    // console.log(reducer)
    factorial *= reducer
    reducer-=1;
  }
  return `Factorial of ${userNum} is ${factorial}`
}
console.log(printFactorial(userInp()))


/*6.
Write a Program to take a number input from user and 
find if the number is Prime or not.*/
// ##########################
// #### TODO: solve #######
// ##########################


/*7.
Write a program to take a day as an input and 
determine whether it is a weekday or weekend. 
Example: Tuesday is weekday. */
const userInp = () => {
  let readlineSync = require('readline-sync');
  return userDay = readlineSync.question('Enter a day: ');
}
const isWeekDay = (userDay) => {
  const WEEK = {
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday',
    6: 'saturday',
    7: 'sunday',
  }
  for (let i in WEEK) {
    return userDay.toLowerCase() === WEEK[i] && i>=1 && i<=5 ? 
      `${userDay} is Weekday` : `${userDay} is Weekend`
  }
}
console.log(isWeekDay(userInp()))