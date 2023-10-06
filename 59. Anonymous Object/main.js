// Anonymous Object = Objects tanpa nama
//                    yang bikin syntax lo  
//                    ga panjang panjang amat

class card{
    constructor(value, suit){
        this.value = value
        this.suit = suit
    }
}



const cards = [
    new card("A", "Hearts"),
    new card("A", "Spades"),
    new card("A", "Diamonds"),
    new card("A", "Clubs"),
    new card("2", "Hearts"),
    new card("2", "Spades"),
    new card("2", "Diamonds"),
    new card("2", "Clubs")]

    cards.forEach((x) => console.log(`${x.value} ${x.suit}`))
