"use strict";
//---------
// CANVAS
//---------
function draw() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect(50, 50, 50, 150);

  ctx.fillStyle = "rgba(0,100,200,0.5)";
  ctx.fillRect(100, 30, 100, 50);

  ctx.fillStyle = "rgba(100,100,200,0.5)";
  ctx.fillRect(10, 25, 100, 100);
  ctx.clearRect(35, 25, 40, 40);
  ctx.strokeRect(125, 75, 50, 50);

  ctx.fillStyle = "rgba(200,100,200,0.8)";
  ctx.beginPath();
  ctx.moveTo(180, 150);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 150);
  ctx.fill();
}

window.addEventListener("load", draw());

//-------------
// TRY...CATCH
//-------------
//Test un block de code
try {
  mafunction();
} catch (error) {
  console.log(error);
}

function isValidJSON(texte) {
  try {
    JSON.parse(texte);
    return true;
  } catch (error) {
    return false;
  } finally {
    console.log("On est arrivé au bout");
  }
}

console.log(isValidJSON("454544 545"));

function isNumber(num) {
  if (isNaN(num)) {
    throw "not a number";
  } else {
    console.log("c'est un nombre");
  }
}

try {
  isNumber("2d");
} catch (err) {
  console.log(err);
}

//-------------
// Strict mode
//-------------
//voiture = "Toyota";
let voiture = "Toyota";
