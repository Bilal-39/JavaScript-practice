const score = 400
console.log(score);

const balance = new Number(200)
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(3))
console.log(balance.toFixed(2))

const secondNumber = 45.623
console.log(secondNumber.toPrecision(2))

const value = 1000000
console.log(value.toLocaleString()); //according to US standard
console.log(value.toLocaleString('en-PK')); //according to PK standard

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(5.33))
console.log(Math.ceil(6.3))
console.log(Math.floor(6.5))

console.log(`Minimum value from 4,3,2,8 is ${Math.min(4,3,2,8)}`)
console.log(`Maximum value from 4,3,2,8 is ${Math.max(4,3,2,8)}`)

console.log(Math.random())  // provides value between 0 and 1 
console.log((Math.random()*10) + 1) // multiplied by 10 to get value in ones and added 1 toavoid 0 at start
max = 20
min = 10
console.log(Math.floor(Math.random() * (max-min+1))+min);
