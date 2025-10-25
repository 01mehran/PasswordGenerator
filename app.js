"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // Selecting Elements;
  const _ = document;
  let result = _.querySelector("#result");
  const copyBtn = _.querySelector("#copy-btn");
  const generateBtn = _.querySelector("#generate-btn");
  const rangeInput = _.querySelector("#range-input");
  const length = _.querySelector("#length");

  //---Input Range;
  rangeInput.addEventListener("input", function () {
    const rangeValue = this.value;
    length.innerText = rangeValue < 10 ? "0" + rangeValue : rangeValue;
  });


  //---Copy Button;
  function ButtonCopy() {
    copyBtn.style.display = "block";
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(result.value);
      copyBtn.textContent = "Coppied";
      setTimeout(() => {
        copyBtn.textContent = "Click to copy";
      }, 3000);
    });
  }

  // Generate Button;
  generateBtn.addEventListener("click", () => {
    // Convert rangeInput value to Number;
    const parRangeInput = parseInt(rangeInput.value);

    // Selectting The Input = [type = checkbox] and is checked or not;
    const uppercase = _.querySelector("#uppercase").checked;
    const lowercase = _.querySelector("#lowercase").checked;
    const number = _.querySelector("#numbers").checked;
    const symbol = _.querySelector("#symbols").checked;

    // Declare Four Different Types Of Password;
    const includeUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const includeLowercase = "abcdefghijklmnopqrstuvwxyz";
    const includeNumbers = "0123456789";
    const includeSymbols = "@#$%^&*()_+[]{}|;:,.<>?";

    let specialCharacters = "";

    if (uppercase) specialCharacters += includeUppercase;
    if (lowercase) specialCharacters += includeLowercase;
    if (number) specialCharacters += includeNumbers;
    if (symbol) specialCharacters += includeSymbols;

    // If SpecialCharacters Is Not Empty;
    if (specialCharacters) {
      // Show Copy Button;
      ButtonCopy();

      let password = "";

      for (let i = 0; i < parRangeInput; i++) {
        const randomIndex = Math.trunc(
          Math.random() * specialCharacters.length
        );

        password += specialCharacters[randomIndex];
      }
      result.value = password;
    } else {
      copyBtn.style.display = "none";
      result.value = "";
    }
  
  });
});
