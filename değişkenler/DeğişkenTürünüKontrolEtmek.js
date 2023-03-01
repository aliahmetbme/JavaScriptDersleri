//* ***************** Veri türünü Öğrenmek ve Veri Türü Dönüşümleri **************************//


// Veri turunu ogrenmek typeof

console.log(typeof Variable);
// beklenen output: "undefined"

//isInteger( ) yöntemi, sayıların tam sayı olup olmadığını belirler.
Number.isInteger(123) //true
Number.isInteger(-123) //true
Number.isInteger(0.5) //false
//isFinite () yöntemi, bir değerin sonlu bir sayı olup olmadığını belirler.
Number.isFinite(0) //true
Number.isFinite('123') //false
Number.isFinite('Hello') //false
Number.isFinite(-Infinity) //false
Number.isFinite(0 / 0) //false
// Number.isNaN () yöntemi, bir değerin NaN (Not-A-Number) olup olmadığını belirler.

Number.isNaN(123) //false
Number.isNaN(0) //false
Number.isNaN('123') //false
Number.isNaN('Hello') //false
Number.isNaN('') //false
Number.isNaN(true) //false
Number.isNaN(undefined) //false
Number.isNaN('NaN') //false
Number.isNaN(NaN) //true


let price = 111
let StringPrice = "111"
let hasPassword = true

console.log (
"price :" , typeof(price),  // cinsini gösterir number 
"\nStringPrice :" , typeof(StringPrice) , // String 
"\nhasPassword :" , typeof(hasPassword) // boalean 
)


// Stringden intiger veya float a dönüştürmek 

let number1 = "11" 
console.log(
    "number: ", number1 , typeof(number1)
)

let newNumber = parseInt(number1)  
console.log(
    "newNumber: " , newNumber , typeof(newNumber)
)

let number2 = "11px"

let newNumber2 = parseInt(number2)
console.log(
    "newNumber2 :" , newNumber , typeof(newNumber2) // Number  a dönüşür newNumber2 : 11 number
)

let number3 = "px11"

let newNumber3 = parseInt(number3)
console.log(
    "newNumber3 :" , newNumber3 , typeof(newNumber3) // newNumber3 : NaN number
                                                     // önünde bişey olunca tam dönüşmüyor 
                                                     // parse rakamsal olanları alıyor
)

let number4 ="12px"

let newNumber4 = Number(number4)

console.log("newNumber4 :" , newNumber4 , typeof(newNumber4)) // newNumber4 : NaN number 
                                                           // Normal Numberin içine atınca tam dönüşmüyor
                                                           // cinsi değişse de NaN kalıyor 
                                                           // Number içinde sadece sayı olması lazım 



let number5 = "11.4px"
let newNumber5 = parseFloat(number5)
console.log("newNumber5 :", newNumber5 , typeof(newNumber5)) // newNumber5 : 11.4 number
                                                             //  noktalı yazsa da number a çeviriyor 


        


// Number i String'e Dönüştürmek 

let number6 = 55 
let newNumber6 = number6.toString()
console.log("newNumber6" , typeof(newNumber6)) /// newNumber6 string


// Tahmin edebileceğiniz üzere her primitif değer stringe dönüştürülebilir.

String(123) // “123”
String(-12.3) // “-12.3”
String(null) // “null”
String(undefined) // “undefined”
String(true) // “true”
String(false) // “false”


String(123) // “123” explicit
123 + '' // “123”    implicit


// implicit
if(3<5) // true
if(3<5) {
    console.log("true canum benim")
}
console.log("" +123) // “123”
12/"6" // 2
console.log(12/"6")

console.log("ALİ" > 3) //FALSE // Önce number a çevirmeye çalışıyor sonra NaN oluyo sonra da false döndürüyor
console.log(5 > 3 ) // TRUE

