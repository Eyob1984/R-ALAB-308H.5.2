
// Here are two arrays you'll be working with:

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

// Every
// Determine if every number is greater than or equal to 0.

const isNumberGreaterOrEqualZero = (value) => value >= 0;
console.log(nums.every(isNumberGreaterOrEqualZero))

// Determine if every word shorter than 8 characters.

const isWordShort = (ele) => ele.length < 8;
console.log(panagram.every(isWordShort));
//--------------------------------------------------------///-----------------------------------------
// Filter

// Filter the array for numbers less than 4.
const numResult = nums.filter(ele => ele < 4)

console.log(numResult)

// Filter words that have an even length.
const result = panagram.filter(word => !(word.length % 2));

console.log(result)

//--------------------------------------------------------///-----------------------------------------
// Find

// Find the index of the first number that is divisible by 3.
const found = nums.find(ele => (ele % 3 ===0))

console.log(found)
// Find the index of the first word that is less than 2 characters long.

const firstString = panagram.find((ele) => {
  return ele.length < 2 ? 'ndex' : 'none'
})
//--------------------------------------------------------///-----------------------------------------
// Find Index

// Find the index of the first number that is divisible by 3.
const numDivByThree = nums.findIndex(ele => !(ele % 3))
console.log(numDivByThree)

// Find the index of the first word that is less than 2 characters long.

const firstWord = panagram.findIndex((ele, index) => {
if( ele.length < 2){
  return index;
}
index ++
})
console.log(firstWord)

//--------------------------------------------------------///-----------------------------------------

//For Each
// Log each value of the array multiplied by 3.

const eachValue = () => {
  const newArray = [];
  nums.forEach((ele) => {
    if(ele % 3 === 0) {
      newArray.push(ele)
    }
  })
  return newArray;
}
console.log(eachValue())

// Log each word with an exclamation point at the end of it.

const exclamation = () => {
  let newArray = []
  panagram.forEach((ele) => {
   newArray.push(ele += '!')
  })
  
  return newArray
} 
console.log(exclamation()) 

//--------------------------------------------------------///-----------------------------------------
//Map

// Make a new array of each number multiplied by 100.
const multipliedByHundred = () => {
  const newArray = [];
  nums.map((ele) => {
    if(ele % 100 === 0) {
      newArray.push(ele)
    }
  })
  return newArray;
}
console.log(multipliedByHundred())

// Make a new array of all of the words in all uppercase.

const wordUppercase = () => {
  let newArray = []
  panagram.map((ele) => {
   newArray.push(ele.toUpperCase())
  })
  
  return newArray
} 
console.log(wordUppercase()) 

//--------------------------------------------------------///-----------------------------------------
// Some
// Find out if some numbers are divisible by 7.
const someNumbers = (ele) => ele % 7 === 0;

console.log(nums.some(someNumbers));

// Find out if some words have the letter a in them.
const someWords = (ele) => ele.includes('a')
console.log(panagram.some(someWords))