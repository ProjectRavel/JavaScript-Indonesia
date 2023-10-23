// console.log(window.scrollY)
// console.log(window.scrollX)  
// console.log(window.location.href)
// window.location.href = "https://google.com"
// console.log(window.location.hostname)
// console.log(window.location.pathname)
// const button = document.getElementById("button")

// button.addEventListener ("click", () => window.print())

const age = window.prompt("Enter your age")

if(age < 18){
    window.alert("You must 18+ To enter this site")
    window.close()
}else{
    console.log("yay")
}