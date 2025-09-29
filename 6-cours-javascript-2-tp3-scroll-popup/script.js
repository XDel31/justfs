let isPopupVisible = true;

window.addEventListener("scroll", () => {
  const scrollValue = window.scrollY;
  const innerHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;

  if (scrollValue > 0) {
    document.querySelector("nav").style.height = "45px";
  } else {
    document.querySelector("nav").style.height = "90px";
  }

  if (scrollValue > 300) {
    imgImprovise.style.opacity = 1;
  } else {
    imgImprovise.style.opacity = 0;
  }

  if (scrollValue + innerHeight >= docHeight && isPopupVisible) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
  } else {
    popup.style.opacity = 0;
    popup.style.transform = "translate(400px,0)";
  }
});

closeBtn.addEventListener("click", () => {
  isPopupVisible = false;
  popup.style.opacity = 0;
});
