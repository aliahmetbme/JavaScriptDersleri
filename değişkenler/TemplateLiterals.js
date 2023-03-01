// *************************** Template Literals Kullanımı ****************** \\


/*Template Literals;

Kod okunabilirliğini kolaylaştırır,
Stringler içerisinde değişken yazma kolaylığını sağlar,
Şablon etiketlerini daha az karmaşık hale getirir.

Template Literals ile JavaScript'te backtick (```) işareti kullanılmaya başlanmıştır.
*/

let userName = "Hakan"
const DOMAIN = "kodluyoruz.org"

let email = userName + "@" + DOMAIN 

console.log("Merhaba Sn. " + userName + " sitemize hoşgeldin " , "\nmail adresiniz: " + email) 
document.write("Merhaba Sn. " + userName + " sitemize hoşgeldin " , "\nmail adresiniz: " + email)


let info = `Merhaba username`
console.log(info)

info = 

`Merhaba ${userName} sitemize hoşgeldin. mail adresin : ${email} \n

mail adresinin uzunluğu ${email.length}

kisa isminiz ${userName[0]}

borcunuz ${(2 + 3) * 10} TL 

Günün saat bilgisi ${new Date().getHours()}
`

// ${} bunun içine variable eklenecek 

console.log(info)

document.write(info) 

console.log(typeof(info))