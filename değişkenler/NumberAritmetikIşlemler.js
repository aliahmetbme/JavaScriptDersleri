/****************** Number *****************************/

// number veri turu tanımlamak

let price = 100
let tax = 0.18
let priceTax= price * tax
let totalPrice = price + priceTax

console.log
(
    "  KDV ORANI :", tax ,
    "\n KDV TUTARI :", priceTax,
    "\n FIYAT :", totalPrice                
)


let StringNumber = "11"
console.log(StringNumber)
let newNumber = Number(StringNumber)
console.log(newNumber)
console.log("Number Constractor icine bilgi gönderildi: ", Number("111"))
/*

Toplama: +
Çıkarma: -
Çarpma: *
Üs Alma: **
Bölme: /
Mod Alma: %
Arttırma: ++
Eksiltme: --

*/

// arttırma ve azaltma islemleri:

let counter = 320
counter = counter + 1 // uzun yöntem
counter += 1 // kısa yöntem 
counter ++ // bir arttırma
counter --  // bir azaltam 
counter *= 10 // 10 katına çıkar 
console.log(counter)


// İŞLEM ÖNCELİĞİ :

// Toplama: Sayıları toplama işlemini gerçekleştirir. İşlem yönü soldan sağadır.
    
    var result = 3+5;
    console.log(result);
    //8 

// Çıkarma: İki sayıyı çıkarma işlemini gerçekleştirir. İşlem yönü soldan sağadır.
    
    var result = 5-2;
    console.log(result);
    //3

// Çarpma: İki sayıyı çarpma işlemini gerçekleştirir. İşlem yönü soldan sağadır.

    var result = 5*2;
    console.log(result);
    //10

// Üs Alma: ECMAScript6 ile gelmiştir. Soldaki değerin, 
//sağdaki rakam veya sayı baz alınarak kendisiyle çarpılması şeklinde gerçekleşir.

    var result = 5**2;
    console.log(result);
    //25  

// Bölme: İki sayıyı bölme işlemini gerçekleştirir. İşlem yönü soldan sağadır.

    var result = 6/3;
    console.log(result);
    //2

// Mod Alma: Operatörün solundaki değerin sağdakine kalanını bulmak için kullanılmaktadır.
// İşlem yönü soldan sağadır.

    var result = 6%3;
    console.log(result);
    //0

/* Arttırma: Bir sayıyı arttırmak için kullanırız. Değeri 1 arttırır. 
For ve While döngüleri içinde sık sık kullanılır, önce veya sonra kullanılabilir.
Operatörün değişkenden sonra gelmesi durumuna postfix form, değişkenden önce gelme durumuna prefix form denilmektedir. Her iki kullanımda da değer +1 arttırılır lakin prefix formu oluşan yeni değeri döndürmektedir. Postfix formu ise eski değeri döndürür, yani ekrana alert keyword (anahtar kelimesi) ile basar, ekrana basılan değer eski değerdir. 
Arttırma işlemi yapılmıştır ve değişkende arttırılmış hali tutulur. */

    let _counter = 1;
    let x = ++_counter;
    // alert(x); // 2

    let counter_ = 1;
    let z = counter_++; 
    // alert(z); // 1 
    // aconsole.log(counter); // 2 değerini verir.

/*Azaltma: Bir sayıyı azaltmak için kullanırız. Değeri 1 azaltır. 
For ve While döngüleri içinde sık sık kullanılır. 
Arttırma operatöründe anlatılan başa veya sonraya operatör ekleme işlemi sonunda gerçekleşen durum azaltma operatörü içinde geçerlidir.*/


// asağı yuvarlama isleme --> Math.floor:
console.log("Asagi Yuvarlama : ", Math.floor(1.9)) // --> 1


// yukari yuvarlama islemi --> Math.ceil :
console.log("Yukari Yuvarlama: " , Math.ceil(1.9)) // --> 2


// yakına yuvarlama islemi -- Math.round
console.log("Yakında Yuvarlama " , Math.round(1,2)) // --> 1