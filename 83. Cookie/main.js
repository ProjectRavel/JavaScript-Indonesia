

deleteCookie("firstName")
deleteCookie("lastName")

console.log (document.cookie)

function setCookie(name, values){
    document.cookie = `${name}=${values};path=/`
}
function deleteCookie(name){
    setCookie(null,null,null)
}