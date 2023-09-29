// template literals = delimited with (`)
//                     instead of double or single quotes
//                     allows embedded variables and expressions

let username = "Rafael Pandu"
let items = 3
let total = 75

// console.log ("Hello", username)
// console.log ("You have", items, "In you kart")
// console.log ("Your total is $", total)

// console.log (`Hello ${username}`)
// console.log (`You have ${items} in you kart`)
// console.log (`Your total is $${total}`)

let text =
`Hello ${username} <br>
You have ${items} in you kart <br>
Your total is $${total}`

document.getElementById("mylabel").innerHTML = text