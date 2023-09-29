// Tolocalstring() = returns a string with a language
//                   sensitive representation of this number

// number.tolocalestring(locale, {options})

// 'locale' = specify that language (undefined = default)
//'options' = object with formatting options

let mynum = 100000

mynum = mynum.toLocaleString (undefined, {style: "unit", unit: "celsius"})

console.log (mynum)