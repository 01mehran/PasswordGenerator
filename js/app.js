"use strict";

import { copyButton } from "./copyButton.js";
import {
  copyBtn,
  generateBtn,
  length,
  rangeInput,
  result,
} from "./domElements.js";

document.addEventListener("DOMContentLoaded", () => {
  //---Input Range;
  rangeInput.addEventListener("input", function () {
    const rangeValue = this.value;
    length.innerText = rangeValue < 10 ? "0" + rangeValue : rangeValue;
  });

  // Generate Button;
  generateBtn.addEventListener("click", () => {
    // Convert rangeInput value to Number;
    const parRangeInput = parseInt(rangeInput.value);

    // Selectting The Input = [type = checkbox] and is checked or not;
    const uppercase = document.querySelector("#uppercase").checked;
    const lowercase = document.querySelector("#lowercase").checked;
    const number = document.querySelector("#numbers").checked;
    const symbol = document.querySelector("#symbols").checked;

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
      copyButton();

      let password = "";

      for (let i = 0; i < parRangeInput; i++) {
        const randomIndex = Math.trunc(
          Math.random() * specialCharacters.length,
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
