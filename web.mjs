import { handleInput } from "./UI/render.mjs";

const checkButton = document.querySelector("#checkButton");
checkButton.addEventListener("click", (e) => {
  e.preventDefault();
  handleInput();
});

// window.onload = function () {
//   document.querySelector(
//     "body"
//   ).innerText = `There are ${getDictionarySize()} words in the Basic English dictionary`;
// };
