// Spread Operators : mengizinkan iterable seperti array atau string 
//                    untuk diperluas di tempat di mana nol atau lebih
//                    argumen diharapkan



let username = "Rafael Pandu Sumanti"
let angka = [1,2,3,4,5,6,7,8,9]
console.log(Math.max(...angka))

let class1 = ['spongebob','patrick','sandy']
let class2 = ['squidward','mrcrab','plankton']

class1.push(...class2)
console.log (...class1)