// Tenary Operators = shortcut for and 'if/else statetment'
//                    take 3  operands

//                    1. a condition with ?
//                    2. expression if True :
//                    3. expression if False :

// condition ? exprIfTrue : expIfFalse

checklist(false)

function checklist(check){
    check ? console.log ("You are checking the box") : console.log ("YOu ArE NOT ChECking ThE bOX")
}