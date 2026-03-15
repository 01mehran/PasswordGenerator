import { copyBtn, result } from "./domElements.js";

export function copyButton() {
  copyBtn.style.display = "block";

  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(result.value);
    copyBtn.textContent = "Coppied✔";

    setTimeout(() => {
      copyBtn.textContent = "Click to copy";
    }, 3000);
  });
}
