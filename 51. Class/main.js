// Class =  a blueprint for creating objects
//          define what properties and methods they have
//          use a constructor for unique properties

class player{

    score = 0

    username = "Xtentacionz"

    pause(){
        console.log ("You Paused the game")
    }

    victory(){
        this.score += 1 
        console.log(this.score)
    }
}

let player1 = new player
let player2 = new player

player1.victory()
player2.pause()

