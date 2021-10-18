console.log("Merhaba9")

//let dolarDun="angaraaa" // JS is not type safe
let dolarDun=9.2
let dolarBugun=9.33
{
    let dolarDun=9.1
}
console.log(dolarDun)

const euroDun = 10.75 // euroDun is read-only' // sabit
//euroDun=11 //sconst değişmez sabit
console.log(euroDun)

//array
let konutKredileri=["a kredisi","b kredisi","c kredisi","ddd kredisi"]
//camelCasing: variable naming
//PascalCasing: ''
console.log(konutKredileri)
console.log("<ul>")
for (let index = 0; index < konutKredileri.length; index++) {
    console.log("<li>"+konutKredileri[index]+"</li>")
}
console.log("</ul>")


