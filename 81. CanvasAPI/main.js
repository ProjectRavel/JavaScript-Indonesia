let canvas = document.getElementById("mycanvas");
let context = canvas.getContext("2d");

context.strokeStyle = "red"
context.lineWidth = 5

// Draw Line
// context.strokeStyle = "yellow"
// context.fillStyle = "red"
// context.beginPath();
// context.moveTo(250, 0)
// context.lineTo(0,250)
// context.lineTo(500,250)
// context.lineTo(250,0)
// context.stroke()
// context.fill()

// Draw Rectangle
// context.strokeRect(0,0,250,250)

// Draw Circle
//(x,y,r,sAngle,eAngle,counterclockwise)
// context.beginPath()
// context.arc(250,250,200,0, 2 * Math.PI)
// context.stroke()

// Draw TEXT
context.font = "50px MV Boli"
context.textAlign = "center"
context.fillText("You WIN!",canvas.width / 2, canvas.height / 2)