let title = document.getElementById("title") //mencari dengan ID
title.style.fontFamily = "arial"

let fruits = document.getElementsByName("fruit") //mencari dengan name

// For each untuk melihat 1 per 1 value yang ada di fruits atau Name(fruit)
// dan ketika fruit itu checked maka akan menghasilkan value dari fruit tersebut
fruits.forEach((fruit) => {
    if(fruit.checked){
        console.log(fruit.value)
    }
})

// let desserts = document.getElementsByClassName("desserts");
// desserts[0].style.backgroundColor = "red"

let element = document.querySelector("#title") //querySelector adalah command yang sering digunakan
//dikarenakan command ini bisa dipakai segala jenis misal (# = id, . = class, [] = element)
element.style.color = "red"

let elementdessers = document.querySelector(".desserts")
elementdessers.style.color = "blue"

let elementattribute = document.querySelector("[for]")
elementattribute.style.backgroundColor = "lime"

let list = document.querySelectorAll(".desserts") //Query selectorALL adalah untuk menggunakan semua query yang ada namun
// harus memakai .foreach

list.forEach((list) =>{
    console.log(list)})
