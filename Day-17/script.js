const btns = document.querySelectorAll(".btns");
btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    btns.forEach((b) => b.classList.remove("active"));
    this.classList.add("active");
  });
});
