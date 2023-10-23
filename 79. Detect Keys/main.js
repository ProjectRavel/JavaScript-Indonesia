const box = document.getElementById("mydiv") 
// window.addEventListener("keydown", x => console.log(x.key)) 
window.addEventListener("keydown", move)
let x = 0
let y = 0

function move(event){
    
    switch(event.key){
        case "ArrowUp":
        y = y - 5;
        box.style.top = y + "px";
        break;
        case "ArrowDown":
        y = y + 5
        box.style.top = y + "px"
        break;
        case "ArrowLeft":
        x = x + 5;
        box.style.right = x + "px";
        break;
        case "ArrowRight":
        x = x - 5
        box.style.right = x + "px"
        
    }

}
