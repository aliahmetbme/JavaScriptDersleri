//*************************String Veri Türü İşlemleri ***************************/

let email = "082aliahmet4@gmail.com"
let firstName = "aliahmet"
let lastName = "ERDOĞDU"

// string karakter sayısı ----> length
console.log(email.length)

// ilk karakter bulmak ---> [0]
console.log(firstName[0])
console.log(firstName.charAt(0))

// büyük - küçük harf 
firstName = firstName.toUpperCase() // büyük harf 
console.log(firstName)

firstName = firstName.toLowerCase() // küçük harf 
console.log(firstName)


// String içinde istediğimiz bilgiyi aramak ve yerini bulmak ---> search:
console.log(email.search("@")) // 12
console.log(email.charAt(12)) // @

/* eğer içinde olmayan bir şey varsa -1 döndürür
eğer -1 geldiyse o onun içnde yoktur */

// Belli bir yere kadarını almak ----> slice (domain bilgisi)

console.log(email.slice(12)) // 12. indexten itibaren almaya başlar
 
console.log(email.slice(0,12)) // 0. dan 12 .ciye kadar alır 12 dahil değil

let DOMAIN =  email.slice(email.search("@") + 1)
console.log(DOMAIN)

let nokta = DOMAIN.indexOf(".")
console.log(nokta)

let mainDOMANIN = DOMAIN.slice(0, DOMAIN.indexOf("."))
console.log(mainDOMANIN)


// bilgiyi değiştirmek --> replace :

let kodluyoruz = email.replace("gmail.com","kodluyoruz.org")
console.log(kodluyoruz) // 082aliahmet4@kodluyoruz.org

// istediğim bilgi var mı ? includes()
 
/* içine verdiğimiz değeri içerip içermediğine göre true ya da false döndürüyor */
console.log(email.includes("@")) // true 
console.log(email.includes("x")) // false 
console.log(email.search("x")) // -1 

// aynı işe yarar diyebilriz search in -1 i includes in false ina


// istediğinle başlayıo bittiğini kontrol etmek --> startsWidth, endsWidth 
console.log(kodluyoruz.endsWith('kodluyoruz.org')) // true

lastName = `${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}` //Bootcamp