// Gives us the abillity to check more than 1 condition concurrently
// && AND (BOTH conditions must be true)
// || OR (Either condition can be true)

let temp = 15
let sunny = true

if(temp  > 0 && temp < 30 && sunny){
    console.log("The weather is good")
}else{
    console.log ("The weather is bad!")
}