let score = "23abc"
// console.log(typeof(score))

let valueInNumber = Number(score)
// console.log(typeof(valueInNumber))
// console.log(valueInNumber)

// console.log("For null")
let score1 = null
let valueInNumber1 = Number(score1)
// console.log(valueInNumber1)

// console.log("For undefined")
let score2 = undefined
let valueInNumber2 = Number(score2)
// console.log(valueInNumber2)

// console.log("For boolean")
let score3 = true
let valueInNumber3 = Number(score3)
// console.log(valueInNumber3)

// console.log("For string")
let score4 = "Bilal"
let valueInNumber4 = Number(score4)
// console.log(valueInNumber4)


// Notes
// "33" => 33
// "33abcx" => NaN
// true => 1
// false => 0
// null => 0
// undefined => NaN

// Bolean to Number 
let isLoggedIn = 1
// console.log("number to boolean")
let converted_value = Boolean(isLoggedIn)
// console.log(converted_value)

// Bolean to Number 
// 1 => true
// 0 => false
// "" => false
// "he" => true


// conversion to string
let someValue = 235
let convert_to_str = String(someValue)
// console.log("Number to string")
// console.log(convert_to_str)
// console.log(typeof convert_to_str)

// ########################## Operations ##########################

let value01 = 3
let negValue = -value01
// console.log(negValue)

// console.log(2**3)

let str1 = "Hello"
let str2 = " World"
console.log(str1+str2)

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1"  + 2 + 2)
// console.log(1 + 2 + "2")

console.log(true)
console.log(+true) // => 1
console.log(+"") // => 0
