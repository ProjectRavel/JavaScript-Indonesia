const buttonclick = document.getElementById("button")
// buttonclick.onclick = Something
// document.body.onload = Something
const element = document.getElementById("mytext")
element.onchange = Something

const div = document.getElementById("mydiv")
// div.onmouseover = changecolor
// div.onmouseleave = resetcolor
div.onmousedown = changecolor
div.onmouseup = resetcolor

function Something(){
    alert ("You DO Something")
}
function changecolor(){
    div.style.backgroundColor = "red"
}
function resetcolor(){
    div.style.backgroundColor = "aqua"
}