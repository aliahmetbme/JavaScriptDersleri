/****  Array (Dizi) Metotlarının Kullanımı ve Array içinde Array Oluşturma **********/

let items = [1,2,3,4,5]

// Array içinde array :

let femaleUsers = ["Ayse","Hulya","Merve"]
let maleUsers = ["Ahmet","Hasan","Mehmet"]

items.unshift(femaleUsers) // basına eklemek 
console.log(items)
/* 

    (6) [Array(3), 1, 2, 3, 4, 5]
    0 : (3) ['Ayse', 'Hulya', 'Merve']
    1 : 1
    2 : 2   
    3 : 3
    4 : 4
    5 : 5
    length : 6

 */
items.push(maleUsers) // sona eklemek 
console.log(items)

// !!! eklenen arraylar ana arrayin içinde bir oge olarak tutulur !!!
    /* 0 : (3) ['Ayse', 'Hulya', 'Merve'] 
    1 : 1
    2 : 2
    3 : 3
    4 : 4
    5 : 5
    6 : (3) ['Ahmet', 'Hasan', 'Mehmet']
    length : 7 */

console.log(items[0]) // (3) ['Ayse', 'Hulya', 'Merve']
console.log(items[0][0]) // Ayse
console.log(items[0][0][0]) // A
console.log(items[0][0][0][1]) // undefined

    /* Array icerisinde oge ayırmak --> splice(pos, items ?)
                                            posizyon, item sayısı */


console.log(items) // [Array(3), 1, 2, 3, 4, 5, Array(3)]
                                           
let newItems = items.splice(2,4) // 2, 3, 4, 5, --->
console.log(newItems) // [2, 3, 4, 5]

console.log(items) // [Array(3), 1, Array(3)]

let _newItems = items.splice(1,2)
console.log(_newItems) // (2) [1, Array(3)]


/* 	
	    // splice(); diziye eleman/elemanlar eklenebilmesini ya da silinebilmesini sağlar. 
        // Silinen değeri gei döndürür. ekleneni döndürmez. dizinin yapısını değiştirir.

    	var dizi = new Array("ali", "veli", "kırklareli", "emret", "komutanım");

	    document.write("orjinal dizi : " + dizi + "<br>");
	    var sil = dizi.splice(2, 1); // 2. indisten başla 1 tane sil, silinecek adet sayısı belirtilmezse 2. indisten başlar sona kadar siler.
		
	    document.write("silinen değer : " + sil + "<br>");
	    document.write("silindikten sonraki dizi : " + dizi + "<br>");
		
	    var ekle = dizi.splice(1,0,"ahmet", "mehmet"); // 1. indisten başla (değeri 1. indisin önüne koyar), değer silme (0 koyarak değer silme diyoruz), sonradan yazılanları diziye 1. indisten itibaren ekle
		
	    document.write("eklenen değer : " + ekle + "<br>"); // eklenen değeri döndürmez dedik!
	    document.write("ekledikten sonraki dizi : " + dizi + "<br>");

	    // aynı anda hem silip hem ekleme yapalım
		
	    var oncesilsonraekle = dizi.splice(1,2,"murat"); // 1. indisten sonra (1. indis dahil) 2 değer silip güncel değer i ekledi
	    document.write("silinen değerler : " + oncesilsonraekle + "<br>");
	    document.write("ekledikten sonraki dizi : " + dizi + "<br>");
*/


// Array icerisinde ogenin index bilgisini bulmak ---> indexof('value')

items.unshift("lorem")
items.push("ispum")

console.log(items) // (3) ['lorem', Array(3), 'ispum']
console.log(items.indexOf('lorem')) // 0
console.log(items.indexOf("ispum")) // 2
console.log(items.indexOf(femaleUsers)) // 1 
console.log(items.indexOf(18)) // -1 demek ki 18 bu arrayda yokmuş 
 

// Array kopyalamak ---> splice , [....ES6] !!!!

let copyItems = items
console.log(items) // (3) ['lorem', Array(3), 'ispum']

copyItems.pop() // sonuncu atıldı
console.log(copyItems) // (2) ['lorem', Array(3)]
console.log(items) // (2) ['lorem', Array(3)]
 
    /* items copyItems a eşitlenince sonuncusunu atınca copyItems da etkileniyor ya da tam tersi yapılan işlemler diğerini etkiliyor */


let _items = ["lorem" , femaleUsers , "ispum"]

copyItems = _items.slice()
console.log(copyItems)
copyItems.pop() // sonuncusu atıldı
console.log("copyItems" , copyItems) // copyItems (2) ['lorem', Array(3)]
console.log("_items", _items)  // items (3) ['lorem', Array(3), 'ispum']

    /* slice() la kopyalayınca  sadece işlem yaptığımız etkilendi */

let es6Items = [..._items] // kopyalama işlemi 
console.log(es6Items) // (3) ['lorem', Array(3), 'ispum']

// Iki Array Bilgisini Birlestirmek ---> [.....ES6, ...ES6] 


let allUsers = [...femaleUsers, ...maleUsers] // arrayları birlestirme
console.log(allUsers) // (6) ['Ayse', 'Hulya', 'Merve', 'Ahmet', 'Hasan', 'Mehmet']


// Arrya icerisindeki bilgiyi String'e cevirmek --> toString , join 

let mixedArray = allUsers.join(" --- ")


console.log(allUsers.toString()) //  Ayse,Hulya,Merve,Ahmet,Hasan,Mehmet
console.log(mixedArray) // Ayse --- Hulya --- Merve --- Ahmet --- Hasan --- Mehmet
console.log(mixedArray[0]) // A

 // join ---> birleştirirken aralara bilgi atar



// İstedigimiz Index Bikgisine sahip Oge eklemek ---> splice(index, 0 , value)

allUsers.splice(allUsers.length - 1, 0 , "Melisa") // allUsers.length - 1, sondan bi önce 
// 0 parçalama demek
console.log(allUsers) // (7) ['Ayse', 'Hulya', 'Merve', 'Ahmet', 'Hasan', 'Melisa', 'Mehmet']

//allUsers.splice(2, 0 , "lorem") // 2. index e ekledi  8 tane var 
//console.log(allUsers) // (7) ['Ayse', 'Hulya', 'Merve', 'Ahmet', 'Hasan', 'Melisa', 'Mehmet']

/* üstteki iki satır yorum satırına alınınca bu sonuçları verdi  */
allUsers.splice(2, 2 , "lorem")  // 2. indexten itibaren 2 tane sildi . "'Merve', 'Ahmet'" gitti sonra 2. indexe denk gelecek şekilde lorem ekledi 
console.log(allUsers) // (6) ['Ayse', 'Hulya', 'lorem', 'Hasan', 'Melisa', 'Mehmet']