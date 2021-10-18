console.log("Merhaba dünya")

// 10;20 ders
// JS type safe değildir.
// normlade direk tanımlama yapmayız 
let dolarDun = 9.20 
let dolarBugun = 9.30
{
    let dolarDun = 9.10
}
console.log(dolarDun)

const pi = 3.14 // sabit değer
// pi = 3.1456 // hata verir yapamayız

console.log(pi)

// array -> dizi
//camelCasing
//PascalCasing
let konutKredileri = ["KonutKredisi", "Emlak Kredisi","Kamu Konut Kredisi"]

console.log(konutKredileri) 

console.log("<ul>")
for (let i =0; i<konutKredileri.length ;i++){
console.log("<li>"+konutKredileri[i]+"</li>")

}
console.log("</ul>")
