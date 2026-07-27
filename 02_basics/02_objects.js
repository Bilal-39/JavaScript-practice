
const mySym = Symbol("key1")
const user = {
    name: "Bilal",
    age: "20",
    email: "example@gmail.com" ,
    [mySym] : "key"
}

console.log(user.name) //one way of accessing values of keys from objects
console.log(user['name']) //other way of accessing values of keys from objects
// user["name"] is used when key in an object is given in quotes "name"

console.log(user[mySym]) //way to access symbol in an object

user.email = "hello@gmail.com"  //way of modifying value of a certain key
console.log(user.email)


// lock the values of an object
// Object.freeze(user)
console.log(user)


user.greeting = function (){
    console.log("hello");
}

console.log(user.greeting());

//accessing the object properties inside the function of the dame object
user.greetingTwo = function(){
    console.log(`Hello ${this.name}`);
}
console.log(user.greetingTwo());