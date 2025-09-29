document.body.innerHTML = '<div id="labelRGB"></div>';
labelRGB.style.background = "rgb(5,5,5)";
labelRGB.style.height = "50px";
labelRGB.style.width = "200px";
labelRGB.style.borderRadius = "9px";
labelRGB.style.fontSize = "1.5rem";
labelRGB.style.textAlign = "center";
labelRGB.style.alignContent = "center";
labelRGB.style.color = "rgb(250,250,250)";
labelRGB.style.boxShadow = "0 1px 5px rgba(0, 0, 0, 50)";
labelRGB.style.position = "absolute";

function getColor() {
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);

  //const rgbValue = "rgb(" + red + ", " + blue + ", " + green + ")";
  const rgbValue = `rgb(${red}, ${blue}, ${green})`;

  document.body.style.background = rgbValue;

  labelRGB.textContent = rgbValue.toUpperCase();
}

setInterval(getColor, 1000);
