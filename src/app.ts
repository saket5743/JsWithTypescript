// Q1. Fibonacci Series
// let nums: number = 8;
// let n1: number = 0, n2: number = 1, nextTerm: number;

// for (let i = 0; i < nums; i++) {
//   console.log(n1);
//   nextTerm = n1 + n2;
//   n1 = n2;
//   n2 = nextTerm;
// }

// Q2. Prime Number
// function primeornot(num: number) {
//   if (num <= 1) {
//     return false
//   }
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return 'not a prime number'
//     }
//   }
//   return 'prime number'
// }
// console.log(primeornot(13));

// Q3. Palindrome Number
// function checkPalindrome(num: number) {
//   let numstr = num.toString();
//   let result = numstr.split("").reverse().join("");
//   // return numstr == result
//   if (numstr == result) {
//     return console.log(`Then ${num} is a palindrome number`)
//   } else {
//     return console.log(`The ${num} is not a palindrome number`)
//   }
// }
// checkPalindrome(121)

// Q4. Factorial Number
// function factorialofanum(num: number) {
//   let res = 1;
//   if (num === 0) return 1
//   for (let i = 2; i <= num; i++) res = res * i
//   return res
// }
// console.log(factorialofanum(8))

// Q5. Reverse a string
// function reversestring(str: string) {
//   let reversed = str.split("").reverse().join("");
//   return reversed
// }
// console.log(reversestring('saket'));

// Q6. Find the missing number.
// let arr = [1, 2, 3, 5, 6];
// for (let i = 1; i < arr.length + 1; i++) {
//   if (arr.indexOf(i) === -1) {
//     console.log(i)
//   }
// }

// Q7. Removes duplicate from an array
// let arr: number[] = [1, 2, 2, 3, 3, 3, 4, 4, 5];
// let res = [...new Set(arr)];
// console.log(res);



