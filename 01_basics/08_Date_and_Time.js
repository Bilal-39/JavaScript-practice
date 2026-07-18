//Dates

let date = new Date()
console.log(date)
console.log(date.toString())
console.log(date.toLocaleString())
console.log(date.toLocaleDateString())
console.log(date.toISOString())
console.log(date.toUTCString())
console.log(date.toJSON())
console.log(typeof date)

// let createDate = new Date(2026,0,12) //in javaScript months start with 0 if you provide single digit in month
let createDate = new Date(2026,0,12,5,6)
console.log(createDate.toLocaleString())

let newDate = new Date("2026-01-12")
console.log(newDate.toDateString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(newDate.getTime())
console.log(Math.floor(Date.now()/1000))