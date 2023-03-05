// Karşılaştırma Operatörleri ve Mantıksal Operatörler && Karşılaştırma Operatörleri

let price = "100" //String
let user = "quest"

// == Eşitse 

console.log(price == 1) // false
console.log(price == 100) // true -->integer a eşit dedi

// === değeri ve türü eşit mi ?

console.log(price === 1) // false
console.log(price === 100) // false türü aynı değil demek ki!! 

// != Eşit değilse 

console.log(price != 1 ) // true
console.log(user != "quest") // false

// < küçükse 

var a = 10;
var b = 10;
console.log(a<b)  //"Ekranda çıkan sonuç = false"
console.log(a<=b)  //"Ekranda çıkan sonuç = true"

// > Büyükse ve >= Büyük veya eşitse

var a = 20;
var x = 10;
console.log(a>x) // "Ekranda çıkan sonuç = true"

var c = 20;
var d = 20;
console.log(c>=d) // "Ekranda çıkan sonuç = true"



console.log (price < 1000); // true 
console.log (price <= 100) // true
console.log (price < 100) // false

// && ve 

var a = 10;
var b = "kodluyoruz";
console.log(a>11 && b=="kodluyoruz") // "Ekranda çıkan sonuç = false"

// || veya

console.log(a>11 || b=="kodluyoruz")  //"Ekranda çıkan sonuç = true"

// ! değil

console.log(!(a>11 || b == "kodluyoruz"))  //"Ekranda çıkan sonuç = false"