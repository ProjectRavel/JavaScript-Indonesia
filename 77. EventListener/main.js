const div1 = document.getElementById("firstdiv")

div1.addEventListener("mouseover", changecolor)
div1.addEventListener("mouseout", resetcolor)

function changecolor(){
    div1.style.backgroundColor = "red"
}
function resetcolor(){
    div1.style.backgroundColor = "green"
}