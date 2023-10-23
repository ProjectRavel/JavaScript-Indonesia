let element = document.querySelector("#sayur")
let sibling = Array.from(element.children)

sibling.forEach(child => child.style.backgroundColor = "lime")



 // .firstElementChild
 // .lastElementChild
 // .parentElement
 // .nextElementSibling
 // .children[]
 // Array.from(.children)