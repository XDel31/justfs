let valueScrollY = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY < valueScrollY) {
    navbar.style.top = 0;
  } else {
    navbar.style.top = "-60px";
  }

  valueScrollY = window.scrollY;
});
