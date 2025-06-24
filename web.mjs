import { handleInput } from "./UI/render.mjs";

const checkButton = document.querySelector("#checkButton");
checkButton.addEventListener("click", (e) => {
  e.preventDefault();
  handleInput();
});

const textInputField = document.querySelector("#textInput");
textInputField.addEventListener("keyup", () => {
  listOfMistakes.innerHTML = "";
  mistakesMessage.style.display = "none";
});
