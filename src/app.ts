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
// function isArmstrong(num: number) {
//   let sum = 0;
//   const numstr = num.toString();
//   for (let char of numstr) {
//     sum += Math.pow(parseInt(char), 3);
//   }
//   return sum === num;
// }
// console.log(isArmstrong(153))

// Q12. Write a function to check if two strings are same as of each other.
// Example:
// Input: "listen", "silent"
// Output: true
// function checkequal(str1: string, str2: string) {
//   let stri1 = str1.split("").sort().join("");
//   let stri2 = str2.split("").sort().join("");
//   return stri1 === stri2;
// }
// console.log(checkequal("listen", "silent"));

// Q13. Write a JavaScript function that merges two arrays and removes all duplicate elements.
// let array1 = [1, 2, 3];
// let array2 = [2, 30, 1];
// function mergeAndRemoveDuplicate(array1: number[], array2: number[]) {
//   const result = array1.concat(array2);
//   const uniqueword = [...new Set(result)]
//   return uniqueword
// }
// console.log(mergeAndRemoveDuplicate(array1, array2));   // [1,2,3,30]

// Q14. Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).
// function firstIsCapt(str: string) {
//   const capit = str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")
//   return capit
// }
// console.log(firstIsCapt("saket kumar"))

// Q15. Write a JavaScript function that takes a string and returns the string with all vowels removed.
// function vowelRemoved(str: string) {
//   const vowels = /[aeiouAEIOU]/g
//   const result = str.replace(vowels, "")
//   return result;
// }
// console.log(vowelRemoved('saket kumar'))

// Q16. Replace the underscore with space and capitalize word.
// function replaceUnderscore(str: string) {
//   const undr = str.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")
//   return undr

// }
// console.log(replaceUnderscore("saket_kumar_manglam"))

// Q17. Find the repeating element and their counts.
// function repeArr(str: string) {
//   let count = 1;
//   let result = ""
//   let temp = str.split("")
//   for (let i = 0; i < temp.length; i++) {
//     if (temp[i] === temp[i + 1]) {
//       count++
//     } else {
//       result = result + count + temp[i]
//       count = 1
//     }
//   }
//   return result;
// }
// console.log(repeArr('aabbccddeeefffffggggghhi'));

// Q18. Create a function that takes a word and returns the new word without including the first character.
// function charRemove(str:string){
//   return str.slice(1)
// }
// console.log(charRemove('saket'))

// Q19. Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
// function swapChar(str: string) {
//   const result = str.split(" ").map(word => word.charAt(0).toLowerCase() + word.slice(1).toUpperCase()).join(" ")
//   return result
// }
// console.log(swapChar('The Quick Brown Fox'))

// Q20. Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.
// function sumOfNum(arr: any[]) {
//   const result = arr.filter(item => typeof item === "number").reduce((sum, num) => sum + num, 0);
//   return result
// }
// console.log(sumOfNum([1, "ch", "2", 5, true, 9, "hi", 7]))

// Q21. Write a JavaScript program to get all the indexes where NaN is found in a given array of numbers and NaN.
// function getNaNIndexes(arr: any[]) {
//   return arr.reduce((indexes, value, index) => {
//     if (Number.isNaN(value)) {
//       indexes.push(index);
//     }
//     return indexes;
//   }, []);
// }

// console.log(getNaNIndexes([2, 5, NaN, 7, 3, NaN, 7, 55, 8, NaN, 65, 75]))