import { handleInput } from "./UI/render.mjs";

const checkButton = document.querySelector("#checkButton");
checkButton.addEventListener("click", (e) => {
  e.preventDefault();
  handleInput();
});

const textInputField = document.querySelector("#textInput");
const listOfMistakes = document.querySelector("#listOfMistakes");
const mistakesMessage = document.querySelector("#mistakesMessage");

textInputField.addEventListener("keydown", (e) => {
  // Prevent clearing output after Ctrl+Enter
  if (e.ctrlKey && e.key === "Enter") return;

  listOfMistakes.innerHTML = "";
  mistakesMessage.style.display = "none";
});

textInputField.addEventListener("keyup", (e) => {
  if (e.ctrlKey && e.key === "Enter") {
    e.preventDefault(); // stop new line
    handleInput(); // simulate form submit
  }
});
