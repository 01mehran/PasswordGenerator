"use strict";

// components;
import { copyButton } from "./copyButton.js";

// elements;
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

// types;
import {
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols,
} from "./types.js";

document.addEventListener("DOMContentLoaded", () => {
  //---Input Range;
  rangeInput.addEventListener("input", function () {
    const rangeValue = this.value;
    length.innerHTML = rangeValue.padStart(2, "0");
  });

  // Generate Button;
  generateBtn.addEventListener("click", () => {
    // Convert rangeInput value to Number;
    const parRangeInput = parseInt(rangeInput.value);

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
