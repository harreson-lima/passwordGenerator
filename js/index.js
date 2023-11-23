const UPPER_CASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER_CASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!#$%&()*+-/?@_|";

const quantity = document.getElementById("quantity");
const displayQuantity = document.getElementById("quantity_display");

displayQuantity.innerHTML = quantity.value;
quantity.addEventListener("input", (e) => {
  displayQuantity.innerHTML = e.target.value;
});

const passwordField = document.getElementById("password");
const upperCaseEle = document.getElementById("uppercase");
const lowerCaseEle = document.getElementById("lowercase");
const numbersEle = document.getElementById("numbers");
const symbolsEle = document.getElementById("symbols");
const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", generatePassword);
const copyBtn = document.getElementById("copy");
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
    alert("Please Select at least one type of character");
  }
}

async function copyPassword() {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(passwordField.innerHTML);

    alert("Password Copied!");
  }
}