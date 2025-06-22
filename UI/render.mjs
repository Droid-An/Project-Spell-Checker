import words from "../words.json" with { type: "json" };
import { checkText } from "../script.mjs";

export const textInput = document.querySelector("#textInput");
export const listOfMistakes = document.querySelector("#listOfMistakes");
const mistakesMessage = document.querySelector("#mistakesMessage");

export function handleInput() {
  const mistakenWords = checkText(textInput.value);
  listOfMistakes.innerHTML = "";
  mistakesMessage.style.display = "none";

  if (mistakenWords.length != 0) {
    createAddAllBtn(mistakenWords);
    renderListOfMistakes(mistakenWords);
  }
}

export function renderListOfMistakes(mistakenWords) {
  for (const word of mistakenWords) {
    const li = document.createElement("li");
    li.textContent = word;
    listOfMistakes.appendChild(li);
    const addToDictBtn = createAddToDictBtn(word);
    listOfMistakes.appendChild(addToDictBtn);
  }
  mistakesMessage.style.display = "block";
}

export function createAddToDictBtn(word) {
  const addToDictBtn = document.createElement("button");
  addToDictBtn.textContent = "Add word to the dictionary";
  addToDictBtn.addEventListener("click", () => {
    words.push(word);
    handleInput();
  });

  return addToDictBtn;
}

export function createAddAllBtn(mistakenWords) {
  const AddAllBtn = document.createElement("button");
  AddAllBtn.textContent = "Add all words to the dictionary";
  AddAllBtn.style.marginBottom = "40px"
  AddAllBtn.addEventListener("click", () => {
    for (const word of mistakenWords) {
      words.push(word);
      handleInput();
    }
  });
  listOfMistakes.appendChild(AddAllBtn);

}
