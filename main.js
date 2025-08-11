let infodiv = document.querySelector(".info");
let infodiv1 = document.querySelector(".info1");
let infodiv2 = document.querySelector(".info2");
let ibtn = document.getElementById("minus");
let ibtn2 = document.getElementById("minus2");
let ibtn3 = document.getElementById("minus3");

ibtn.addEventListener("click", () => {
  infodiv1.classList.toggle("hide");
  ibtn.classList.toggle("rotated");
});
ibtn2.addEventListener("click", () => {
  infodiv2.classList.toggle("hide");
  ibtn2.classList.toggle("rotated");
});
ibtn3.addEventListener("click", () => {
  infodiv.classList.toggle("hide");
  ibtn3.classList.toggle("rotated");
});
