// Koşul Yapısı Kullanımı(If/Else)

let kosul 
// if in içndeki kosul dooğruysa çalışacak yanlışsa else çalışaka
if(kosul) {
    // Bu kod satırı çalışacaktır.
}

else {
    // Bu kod satırı çalışır.
}

var x = 5;
var y = 7;

if(x > y) {
    console.log(x + " sayisi" + y + " sayisindan büyüktür." );
}

else {
    console.log(y + " sayisi" + " " + x + " sayisindan büyüktür.");
}

var ogrVizeNot = 80

var ogrFinalNot = 40 

var ogrOrtalama = (ogrVizeNot * 0.3) + (ogrFinalNot * 0.7);

if(ogrOrtalama >= 0 && ogrOrtalama <= 30) {
  console.log("Not ortalamanız: " +ogrOrtalama + " KALDINIZ(FF).");
}

else if(ogrOrtalama >= 31 && ogrOrtalama <= 49) {
  console.log("Not ortalamnız: " +ogrOrtalama + " DC - KOŞULLU ");
}

else if(ogrOrtalama >= 50 && ogrOrtalama <= 84) {
  console.log("Not ortalamnız: " +ogrOrtalama + " CC - GEÇTİNİZ ");
}

else if(ogrOrtalama >= 85 && ogrOrtalama <= 100) {
  console.log("Not ortalamnız: " +ogrOrtalama + " AA - GEÇTİNİZ ");
}