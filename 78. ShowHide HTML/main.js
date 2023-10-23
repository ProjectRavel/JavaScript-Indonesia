const toggle = document.getElementById("toggle")
const myimage = document.querySelector("#image")

toggle.addEventListener("click", () => {
    if(myimage.style.display == "none"){
        myimage.style.display = "block"
    }else{
        myimage.style.display = "none"
    }
})