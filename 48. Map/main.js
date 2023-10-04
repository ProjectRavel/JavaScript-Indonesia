// Map = object that holds key-value parts of any data type

const store = new Map([
    ["T-Shirt",20],
    ["Jeans",30],
    ["Socks",10],   
    ["Underwear",15]
])

let shoppingcart = 0

// store.set("Hat", 40)
// store.delete("Hat")
// console.log (store.has("Underwear"))
// console.log(store.size)


store.forEach((x, y) => console.log(`You Buy some ${y} and the price is ${x}$`))