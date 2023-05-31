
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