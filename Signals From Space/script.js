
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

context.fillStyle = "#ffffffff"; 
context.fillRect(300, 10, 1000, 600);

context.strokeStyle = "#646464ff";
context.lineWidth = 15;  
context.lineJoin = "round"; 
context.strokeRect(300, 10, 1000, 600);

