const names = document.querySelectorAll(".names");
const cross = document.getElementById("cross");
const lines = document.getElementById("lines");
const aside = document.querySelector("aside");

cross.addEventListener("click", () => {
  names.forEach((element) => {
    element.style.display = "none";
    aside.style.width = "40px";
    lines.style.display = "block";
    cross.style.display = "none";
  });
});
lines.addEventListener("click", () => {
  names.forEach((element) => {
    element.style.display = "block";
    aside.style.width = "150px";
    lines.style.display = "none";
    cross.style.display = "block";
  });
});
