"use strict";

import { copyButton } from "./copyButton.js";
import {
  copyBtn,
  generateBtn,
  length,
  rangeInput,
  result,
  uppercase,
  lowercase,
  number,
  symbol,
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

    // Declare Four Different Types Of Password;
    const includeUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const includeLowercase = "abcdefghijklmnopqrstuvwxyz";
    const includeNumbers = "0123456789";
    const includeSymbols = "@#$%^&*()_+[]{}|;:,.<>?";

    let specialCharacters = "";

    if (uppercase.checked) specialCharacters += includeUppercase;
    if (lowercase.checked) specialCharacters += includeLowercase;
    if (number.checked) specialCharacters += includeNumbers;
    if (symbol.checked) specialCharacters += includeSymbols;

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
