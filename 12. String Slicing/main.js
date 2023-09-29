let fullname = "Rafael Pandu"
let firstname;
let lastname;

firstname = fullname.slice(0, fullname.indexOf(" "))
lastname = fullname.slice(fullname.indexOf(" ") + 1)

console.log (firstname)
console.log (lastname)