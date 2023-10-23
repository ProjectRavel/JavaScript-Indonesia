// add/change HTML elements
// .innerHTML (vulnerable to XSS attacks)
// .textContent (more secure)

// const nametag = document.createElement("h1")
// nametag.textContent = prompt("Test")
// document.body.append(nametag)

let buah = document.getElementById("buah")

let banyakbuah= document.createElement("li")
banyakbuah.textContent = "mangga"

// buah.append(banyakbuah)
// buah.prepend(banyakbuah)
buah.insertBefore(banyakbuah, buah.getElementsByTagName("li")[2])




// mylist.append(list)
// mylist.prepend(list)

