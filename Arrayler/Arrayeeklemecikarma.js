// Dizi(Array) Oluşturmak ve Dizi İçindeki Elemanlara Ulaşmak

let items = [1, 20 , 30 ,40 ]
console.log("items - ilk hali : ", items)
// items - ilk hali : [1, 20, 30, 40]

// sona öge ekleme --> push()

items.push(45) // sonra gitti 
console.log("items - ikinci hali : ", items)
// items - ikinci hali : [1, 20, 30, 40, 45]


// başa eklemek ---> unshift()

items.unshift(5) // başa gitti
console.log("items - üçüncü hali : ", items)
// items - üçüncü hali : [5, 1, 20, 30, 40, 45]

// sondan çıkarma ---> pop()

let lastItem = items.pop() // çıkarılan öge lastitem a atandır  --> 45
console.log("cikarilan -->", lastItem)
console.log("cikarilmis hali :" , items)

//cikarilan --> 45
// cikarilmis hali : [5, 1, 20, 30, 40]

items.push(lastItem) // 45
console.log("yeniden eklenmiş hali :" , items) // çıkarılanı ekledim geri 
// yeniden eklenmiş hali :  [5, 1, 20, 30, 40, 45]


// baştan çıkarma --> shift()

let firstItem = items.shift() // 5 cıkarıldı 
console.log(`First item is ${firstItem} updated items is [${items}]`)
// First item is 5 updated items is [1,20,30,40,45]


// Array içindeki bişey i değiştirmek 

items[0] = 18 // önceden 1 di 
console.log(items) // [18, 20, 30, 40, 45]


// Arrayde sonuncuyu değiştirme 


items[items.length - 1 ] = 1000 // önceden 45 di 
console.log(items) // [18, 20, 30, 40, 1000]


// Array splice methodu 

var sports = ['basketball', 'football', 'tennis' ];
console.log(sports); // basketball, football, tennis
sports.splice(1,1); // kaçıncı indexten başlayıp silinecek indexleri siler
console.log(sports); // basketball, tennis


var sports = ['basketball', 'football', 'tennis' ];
console.log(sports); // basketball, football, tennis
sports.splice(1,0,'baseball'); // bu da ekliyor çift fonksiyonlu bir metod
console.log(sports); // basketball, baseball, football, tennis