const UPPER_CASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER_CASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!#$%&()*+-/?@_|";

const quantity = document.querySelector(".quantity");
const displayQuantity = document.querySelector(".quantity_display");

displayQuantity.innerHTML = quantity.value;
quantity.addEventListener("input", (e) => {
  displayQuantity.innerHTML = e.target.value;
});

const passwordField = document.querySelector(".password");
const upperCaseEle = document.querySelector("#uppercase");
const lowerCaseEle = document.querySelector("#lowercase");
const numbersEle = document.querySelector("#numbers");
const symbolsEle = document.querySelector("#symbols");
const generateBtn = document.querySelector(".generate-btn");
generateBtn.addEventListener("click", generatePassword);
const copyBtn = document.querySelector(".copy");
copyBtn.addEventListener("click", copyPassword);

function generatePassword() {
  let password = "";
  let length = quantity.value;
  let chars = "";
  
  chars += upperCaseEle.checked ? UPPER_CASE : "";
  chars += lowerCaseEle.checked ? LOWER_CASE : "";
  chars += numbersEle.checked ? NUMBERS : "";
  chars += symbolsEle.checked ? SYMBOLS : "";

  if (chars !== "") {
    for (let i = 0; i <= length; i++) {
      let rand = Math.floor(Math.random() * chars.length);
      password += chars.substring(rand, rand + 1);
    }
   
    passwordField.innerHTML = password;
  } else {

    Toastify({
      text: "Please, select at least one type of character",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "#fdf16f",
        color: "#1e232c",
      },
    }).showToast();
  }
}

async function copyPassword() {
  if (passwordField.innerHTML === "") {
    Toastify({
      text: "First generate a password!",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "#fff",
        color: "#1e232c",
      },
    }).showToast();
    return;
  }
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(passwordField.innerHTML);
    Toastify({
      text: "Copied Password!",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "#6be247",
        color: "#1e232c",
      },
    }).showToast();
  }
}