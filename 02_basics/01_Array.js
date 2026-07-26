const myarr = [1,2,3,4,5,6]
console.log(myarr)

const names = ["Ahmed","Hameed"]
const myarr2 = new Array(1,2,3,4)
console.log(myarr2[2])

myarr.push(7)       // push() add value at the end of an array
myarr.push(8)       // pop() removes value from the end of an array 
myarr.pop()
console.log(myarr)


myarr.unshift(7)        //unshift() add value at the start of an array
myarr.shift()           //shift() removes value from the start of an array
console.log(myarr)

 console.log(myarr.includes(9))  //it checks whther the following element exists in an arrayor not 
 console.log(myarr.indexOf(4))     //it finds the index of given element of array

const newarr = myarr.join() //it converts array to string
console.log(newarr)
console.log(typeof newarr)

console.log("Original Array: ", myarr)
const arr1 = myarr.slice(1,3)  
// The slice() method of Array instances returns a shallow copy of a portion of an array into a new array
console.log("Sliced Array: ", arr1)
console.log("Original Array after slice(): ", myarr)

console.log("Original Array: ", myarr)
const arr2  = myarr.splice(1,3)         
// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements
console.log("Spliced Array: ", arr2)
console.log("Original Array after splice(): ", myarr)

const arr = [1,2,3,4]  
const arr2 = [5,6,7,8]

arr.push(arr2)   // it adds array as an eelement
console.log(arr);
console.log(arr[4][1]);

const arr3 = arr.concat(arr2)   // it merges two array
console.log(arr3);

// spread operator
const allnums = [...arr,...arr2,]  //it spreads the elements of arrays and  create a new array
console.log(allnums);

// flat() convert arrays and their subarrays into one dimensional array
const arr4 = [1,2,3,[4,5],6,7,[8,[9,10,11,[12,13,14,15]]]]
console.log(arr4.flat(Infinity))


console.log(Array.isArray("Ahmed")); //isArray checks that the parameter provided is an array or not
console.log(Array.from("Ahmed")) // it convert any given iteratable value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))  //it returns a new array from given set of Elements
