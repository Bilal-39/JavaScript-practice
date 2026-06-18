//Note Avoid all these types of comparisons 

// console.log("2" > 2)
// console.log("02" > 2)

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

//Note 
// The reason is that an equality check and comparison operator workf differently
// comparison operator converts null to s number making it as 0, therefore null>=0 is true and
// null == 0 is false 
// This happens in javascript 


// == and === works differently 
// == this only do comparison check
// === this do comparison but also checks for datatypes

console.log("2" === 2);

