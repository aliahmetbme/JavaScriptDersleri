// *********************** Boolean Veri Turu ile Calismak ***************


// 0 ve 1 i anlamak 

let isActive = false // 0
isActive = true // 1
console.log(isActive)

let userName; 
let isUserName = Boolean(userName)
console.log(isUserName)
// var olan bilgilere true diyor 
console.log(isUserName)

Boolean("11") // true
Boolean("0") // true
Boolean("") // false

userName = "user"
console.log("Is user name" , Boolean(userName))

// 0, -0, null, falsei NaN, undefined, ("") -->
