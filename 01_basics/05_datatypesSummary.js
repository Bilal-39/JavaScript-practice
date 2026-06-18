// Primitive

// 7 types: String, Number, Boolearn, null, undefined, Symbol,BigInt

 const score = 100
const points = 100.3

const isLoggedIn = false
const outsideTemp = null
let email = "example@gmail.com"
let name

const id = Symbol('123')
const secondId = Symbol('123')
// console.log(id === secondId);

const bignumber = 465421215412313n
// console.log(bignumber)

// Reference (Non primitive)
// Array, Objects, Functions
const names = ['Ahmed','Bilal','Hamid']

const info = {
    personName: "Ahmed",
    age: 21,
}

const myfunction = function(){
    console.log("Hello World");
}

console.table([
    { Variable: "score", Value: score, Datatype: typeof score },
    { Variable: "points", Value: points, Datatype: typeof points },
    { Variable: "isLoggedIn", Value: isLoggedIn, Datatype: typeof isLoggedIn },
    { Variable: "outsideTemp", Value: outsideTemp, Datatype: typeof outsideTemp },
    { Variable: "email", Value: email, Datatype: typeof email },
    { Variable: "name", Value: name, Datatype: typeof name },
    { Variable: "id", Value: id.toString(), Datatype: typeof id }, // Symbols must be stringified to show in tables
    { Variable: "secondId", Value: secondId.toString(), Datatype: typeof secondId },
    { Variable: "bignumber", Value: bignumber.toString(), Datatype: typeof bignumber }, // BigInt must be stringified
    { Variable: "names", Value: names.join(', '), Datatype: typeof names },
    { Variable: "info", Value: JSON.stringify(info), Datatype: typeof info },
    { Variable: "myfunction", Value: "[Function]", Datatype: typeof myfunction }
]);