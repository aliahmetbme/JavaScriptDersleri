//// **** let ve const ile Degisken Tanimlama ******
document.write("Kodluyoruz")
// var ile degisken tanımlama 

// eski yöntem
//var ServerName="api.kodluyoruz.org"
//console.log(ServerName);


// let ile degisken tanımlama

let ServerName ;
console.log(ServerName)


// let ile degiskene bilgi atamak 
ServerName = "https://kodluyoruz.org"
console.log(ServerName)

// let ile degiskene bilgi atayarak tanimlamak
let password = "1234";
console.log(password)

// degisken atamadan kullanmaya calismak

/*
console.log(fullName)
let fullName = "Ali Ahmet Erdoğdu";

yanlış kullanım

sıralı okuma olur yazılımda

let de hataları gösterir 
*/

let fullName = "Ali Ahmet Erdoğdu";
console.log(fullName)

// let ile tanımlanan bilgi değişebilir

fullName="Lorem Ipsum Dolor"
console.log(fullName)

// birleştirme veya ekleme
fullName = fullName + "Yeni eklenen bilgi"
console.log(fullName)


// const ile degiskeni bos tanimlamaya calismak :( 
const SERVER_PASSWORD ="sdljfljsfiosjisd";
console.log(SERVER_PASSWORD)

/*
SERVER_PASSWORD = "1234"
console.log(SERVER_PASSWORD)

constla tanımladığın bilgiyi değiştiremezsin

*/
// const ile degisken tanimlamak

