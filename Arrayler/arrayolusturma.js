// array - dizilerle calimak


// ARRAY OLUSTURMA

let domain = "kodluyoruz"
let isActive = false
let items = [12,2,3,isActive,domain]

console.log(items)

// items = [1,2,3]  1,2,3
// items += [1,2,3] 1,2,3,false,kodluyoruz1,2,3


let emptyArray = [] // bos liste 

// Array icindeki eleman sayısını öğrenmek 

console.log(items.length)

// ilk elemana ulaşmak 

console.log(items[0])

// son elemana ulaşmak 

console.log(items[items.length - 1] )

// ortadaki elemana ulaşmak 
console.log("ortadaki", items[Math.floor(items.length / 2)])


// değişken içindeki bilginin array olup olmadığını kontrol edilmesi

console.log(
    typeof(items) // object
)

console.log( Array.isArray(items) /* true */)

console.log("[]" ,  Array.isArray([]) /*true*/ )

console.log("1 :" , Array.isArray(1) /*false*/ )

console.log("true : " , Array.isArray(true))