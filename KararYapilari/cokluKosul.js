// Çoklu Koşul Yapısı Kullanımı

let userName = prompt("Kullanici Adiniz: ")
let age = prompt("Yasiniz: ")
let info = document.querySelector("#info")

if (userName && age >= 18) {
    document.write( "ehliyet alabilirsiniz")
} else if (!userName) {
   document.write("kullanidi adi yok")
} else if (!age) {
   document.write("Yas bilgisi yok")
} 
else if (!(age >= 18)){
   document.write("18 den küçüksünüz")
}