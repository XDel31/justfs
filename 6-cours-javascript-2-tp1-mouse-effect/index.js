const bubble1 = document.createElement("div");
const bubble2 = document.createElement("div");
const bubble3 = document.createElement("div");

bubble1.classList.add("bubble");
bubble2.classList.add("bubble");
bubble3.classList.add("bubble");

document.body.appendChild(bubble1);
document.body.appendChild(bubble2);
document.body.appendChild(bubble3);

bubble1.style.height = "10px";
bubble1.style.width = "10px";
bubble1.style.background = "rgb(148, 146, 4)";
bubble1.style.zIndex = 3;

bubble2.style.height = "100px";
bubble2.style.width = "100px";
bubble2.style.background = "rgb(181, 181, 181)";
bubble2.style.mixBlendMode = "difference";
bubble2.style.zIndex = 2;
bubble2.style.transition = "0.1s ease-out";

bubble3.style.height = "200px";
bubble3.style.width = "200px";
bubble3.style.background = "rgb(20, 20, 20)";
bubble3.style.mixBlendMode = "overlay";
bubble3.style.zIndex = 1;
bubble3.style.transition = "0.2s ease-out";

window.addEventListener("mousemove", (e) => {
  bubble1.style.top = e.pageY + "px";
  bubble1.style.left = e.pageX + "px";

  bubble2.style.top = e.pageY - 45 + "px";
  bubble2.style.left = e.pageX - 45 + "px";

  bubble3.style.top = e.pageY - 95 + "px";
  bubble3.style.left = e.pageX - 95 + "px";
});
