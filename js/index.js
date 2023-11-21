let quant = document.getElementById("quantity");
let quantDisplay = document.getElementById("quantity_display");

quantDisplay.innerHTML = quant.value;
quant.addEventListener("input", print);

function print() {
  quantDisplay.innerHTML = quant.value;
}