const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = canvas.width/2;
let y = canvas.height-30;
const dx = 2;
const dy = -2;

function drawBall(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
function draw() {
  // drawing code
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall(x, y);
  x += dx;
  y += dy;
}
setInterval(draw, 10);