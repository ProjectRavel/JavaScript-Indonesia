 // returns =  returns a value back to the place
 //            where you invoked a function

 let area
 let width
 let height

 width = prompt ("enter width")
 height = prompt ("enter height")

 area = getarea(width, height)

 console.log ("The area is:", area)

 function getarea(width, height){
    let results = width * height
    return results
 }