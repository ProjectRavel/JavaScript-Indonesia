const button = document.getElementById("button");
const box = document.getElementById("mydiv");

button.addEventListener("click", move)

function move(){
    let ScaleX = 1;
    let ScaleY = 1;

    let timerid =  setInterval(frame, 5)
    
    function frame(){
        if(ScaleX >= 2 || ScaleY >= 2){
            ScaleX -= 0.01;
            ScaleY -= 0.01;
            box.style.transform = "scale("+ScaleX+","+ScaleY+")"
        }
        else if(ScaleX >= 1 || ScaleY >= 1){
            
            ScaleX += 0.01;
            ScaleY += 0.01;
            box.style.transform = "scale("+ScaleX+","+ScaleY+")"

        }
    
    }
        
    
}