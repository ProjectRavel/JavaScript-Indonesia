let cards = ["A", "2", "3", "4","5","6","7","8","9","10","J","Q","K"]

shuffle(cards)

function shuffle (array){
    let currenindex = array.length

    while(currenindex != 0){
        let randomindex = Math.floor(Math.random() * currenindex)
        currenindex -= 1
    }
}