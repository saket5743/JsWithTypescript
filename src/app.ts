// Q1. Fibonacci Series
// let nums: number = 8;
// let n1: number = 0, n2: number = 1, nextTerm: number;

// for (let i = 0; i < nums; i++) {
//   console.log(n1);
//   nextTerm = n1 + n2;
//   n1 = n2;
//   n2 = nextTerm
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

// Q8. Find the age of a person
// function calculateAge(birthDate: Date): number {
//   const today = new Date();
//   const birthYear = birthDate.getFullYear();
//   const birthMonth = birthDate.getMonth();
//   const birthDay = birthDate.getDate();
//   let age = today.getFullYear() - birthYear;
//   if (
//     today.getMonth() < birthMonth ||
//     (today.getMonth() === birthMonth && today.getDate() < birthDay)
//   ) {
//     age--;
//   }
//   return age;
// }
// const birthDate = new Date(1999, 1, 26);
// const age = calculateAge(birthDate);
// console.log(`The person's age is ${age}.`);

// Q9. Find the non repeating character from this string
// const str = "aaeeedrrwwww";
// let res = "";
// for (let char of str) {
//   if (str.indexOf(char) === str.lastIndexOf(char)) {
//     res = char;
//     break;
//   }
// }
// console.log(res);

// Count Vowels and Consonants
// Q10. Count the number of vowels and consonants in a string.
// Example:
// Input: "hello"
// Output: Vowels: 2, Consonants: 3
// function findVowelsandConstants(input: string) {
//   const vowels = 'aeiouAEIOU'
//   let vowelCount = 0;
//   let constantCount = 0;

//   for (let char of input) {
//     if (char.match(/[a-zA-Z]/)) {
//       if (vowels.includes(char)) {
//         vowelCount++;
//       } else {
//         constantCount++;
//       }
//     }
//   }
//   return {
//     vowels: vowelCount,
//     consonants: constantCount
//   }
// }

// const res = findVowelsandConstants("hello")
// console.log(res);

// Q11. Armstrong number
function isArmstrong(num: number) {
  let sum = 0;
  const numstr = num.toString();
  for (let char of numstr) {
    sum += Math.pow(parseInt(char), 3);
  }
  return sum === num;
}
console.log(isArmstrong(153))
