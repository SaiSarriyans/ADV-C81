canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");





ctx.beginPath();
ctx.strokeStyle = color = "blue" ;
ctx.lineWidth = 2;
ctx.arc(200, 200, 50, 0, 2*Math.PI );
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = color = "black" ;
ctx.lineWidth = 2;
ctx.arc(350, 210, 50, 0, 2*Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color = "red" ;
ctx.lineWidth = 2;
ctx.arc(500, 210, 50, 0, 2*Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color = "yellow" ;
ctx.lineWidth = 2;
ctx.arc(270, 250, 50, 0, 2*Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color = "green" ;
ctx.lineWidth = 2;
ctx.arc(430, 250, 50, 0, 2*Math.PI );
ctx.stroke();

