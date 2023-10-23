// Decalration
const batuBtn = document.getElementById("batu")
const guntingBtn = document.getElementById("gunting")
const kertasBtn = document.getElementById("kertas")
const choice = document.getElementById("choice")
const array = ["Batu", "Gunting", "Kertas"] // 0 , 1 , 2
const result = document.getElementById("result")
const computer = document.getElementById("computerchoice")


batuBtn.addEventListener ("click", () => {

    let randomizer = Math.floor(Math.random() * 3)
    console.log(randomizer)
    choice.textContent = "Batu"
    switch(randomizer){
        case 0:
            computer.textContent = "Batu"
            result.style.color = "Gray"
            result.textContent = "Seri!"
        break
        case 1:
            computer.textContent = "Gunting"
            result.style.color = "Lime"
            result.textContent = "Kamu Menang!"
        break
        case 2:
            computer.textContent = "Kertas"
            result.style.color = "Red"
            result.textContent = "Kamu Kalah!"
        
    }
       
    

})
kertasBtn.addEventListener("click", () => {
    let randomizer = Math.floor(Math.random() * 3)
    choice.textContent = "Kertas"
    switch(randomizer){
        case 0:
            computer.textContent = "Batu"
            result.style.color = "Lime"
            result.textContent = "Kamu Menang!"
        break
        case 1:
            computer.textContent = "Gunting"
            result.style.color = "Red"
            result.textContent = "Kamu Kalah!!"
        break
        case 2:
            computer.textContent = "Kertas"
            result.style.color = "Gray"
            result.textContent = "Seri!"
        
    }
})
guntingBtn.addEventListener("click", () => {
    let randomizer = Math.floor(Math.random() * 3)
    choice.textContent = "Gunting"
    switch(randomizer){
        case 0:
            computer.textContent = "Batu"
            result.style.color = "Red"
            result.textContent = "Kamu Kalah!"
        break
        case 1:
            computer.textContent = "Gunting"
            result.style.color = "Gray"
            result.textContent = "Seri!"
        break
        case 2:
            computer.textContent = "Kertas"
            result.style.color = "Lime"
            result.textContent = "Menang!"
        
    }
})
