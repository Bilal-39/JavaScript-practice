const name = "Bilal"
const repoCOunt = 10

//this is older method 
// console.log(name + repoCOunt); 

// this is newer method to add string to variable, as it uses string interpolation 
console.log(`my name is ${name} and my repo count is ${repoCOunt}`);

// 2nd  way of declaring string in javascript

const gameName = new String('Cricket')
console.log(gameName[0])
console.log(gameName.__proto__)
// __proto__ is a special property in JavaScript that points to an object's internal 
// prototype (hidden as [[Prototype]]).

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
console.log(gameName.charAt(2)) // write index to find the char at that index
console.log(gameName.indexOf('c')) // write char to find its index

const newString = gameName.substring(2,5) // in substring() we can not provide negative values as index
console.log(newString)

const amotherString = gameName.slice(-2,7)
console.log(amotherString)

// When you pass a negative number to slice(), 
// JavaScript adds the total length of the string to that negative number to find the 
// actual position.
// The string 'Cricket' has a length of 7.JavaScript calculates the start position as: 7 + (-2) = 5.

const oneString = "  Hello World "
console.log(oneString)
console.log(oneString.trim())  //trim() removes the unwanted spaces at the start and at the end of the string 

const url = "https://dshfgds.com/abc%20def" //this url is just for example
console.log(url.replace('%20','-'))

console.log(url.includes('abc'))

console.log(url.split('/'))