const accountId = 1258
let accountEmail = "example@gmail.com"
var accountPass = "12589"
accountCity = "Islamabad"  //mot prefer to use but it is also a part of syntax
let accountState; //using semicolon are not compulsory

// accountId =  25 // not allowed
accountEmail = "example1945@gmail.com"
accountPass = "126478"
accountCity = "Rawalpindi"

/**
 Prefer not to use var because of issue in block scope and functional scope
 */

console.table([accountId,accountEmail,accountPass,accountCity,accountState])