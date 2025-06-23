import { handleInput } from "./UI/render.mjs";

const checkButton = document.querySelector("#checkButton");
checkButton.addEventListener("click", (e) => {
  e.preventDefault();
  handleInput();
});
