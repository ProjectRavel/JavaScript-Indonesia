//array.map() adalah = callback yang di mapping untuk di masukkin ke function trus dibuat jadi array baru
//                     susah dimengerti ya? wkwkwkwk yaudah semangat yuk bisa


let numbers = [1, 2, 3, 4];
let squares = numbers.map(square);
console.log (squares)

function square(element) {
    return Math.pow(element, 2);
}

