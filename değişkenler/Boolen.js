// *********************** Boolean Veri Turu ile Calismak ***************


// 0 ve 1 i anlamak 

let isActive = false // 0
isActive = true // 1
console.log(isActive)

let userName; 
let isUserName = Boolean(userName)
console.log(isUserName) // false çünkü yok 


// var olan bilgilere true diyor 
// yok olmayan bilgiler de true oluyor 
console.log(isUserName)

Boolean("11") // true
Boolean("0") // true

Boolean("") // false
Boolean(0) // false
Boolean(-0) // false 
Boolean(-0.1) // true

Boolean(0 == 0) // eşit mi ? --> true

userName = "user"
console.log("Is user name" , Boolean(userName))

Boolean(userName.length > 0) // true

// 0, -0, null, falsei NaN, undefined, ("") -->


Boolean(10>9);
//true


// İçinde değer barındıran tüm ifadeler true'tur.


const b1 = Boolean(100);
const b2 = Boolean(3.14);
const b3 = Boolean(-15);
const b4 = Boolean("Hello");
const b5 = Boolean('false');
const b6 = Boolean(1 + 7 + 3.14);

// İçinde değer barındırmayan tüm ifadeler false 'tur.
const c1 = Boolean(undefined);
const c2 = Boolean(null);
const c3 = Boolean("");
const c4 = Boolean(false);
const c5 = Boolean(NaN);
const c6 = Boolean(0);
const c7 = Boolean(-0);

// veya “||” operatörü ilk bulduğu true değeri döner
var a= 2 || s || 4 || 5; // 2
// eğer true dönecek değer bulamazsa en son buluğu false değeri döndürür
var b=0 || "" || false || -0 || 0 // 0
var c= 0 ||  ""  ||  " 123 "|| 4 ; // ”123” dolu string true dönecektir
// ve ”&&” operatörü ilk bulduğu false değeri döner.
var d=2 && 3 && 0 && 5 && 7; // 0
// eğer false dönecek değer bulamazsa en son buluğu true değeri döndürür
var e= 2 && 3 && 5 && 7 // 7


console.log(Boolean({})) // true
console.log(Boolean([])) // true
console.log(Boolean([1,2,3])) // true
console.log(Boolean({13:234})) //true