// Import the list of valid words (dictionary) from a JSON file
import words from "../words.json" with { type: "json" };

// Import the function that checks for spelling mistakes
import { checkText } from "../script.mjs";

// Get references to DOM elements used in the UI
export const textInput = document.querySelector("#textInput");
export const listOfMistakes = document.querySelector("#listOfMistakes");
const mistakesMessage = document.querySelector("#mistakesMessage");

// This function handles the input processing
export function handleInput() {
  // Run the spell check on the current text input
  const mistakenWords = checkText(textInput.value);

  // Clear the current list of mistakes from the DOM
  listOfMistakes.innerHTML = "";
  mistakesMessage.style.display = "none";

  // If there are spelling mistakes, show and render them
  if (mistakenWords.length != 0) {
    createAddAllBtn(mistakenWords); // Create "Add all words to the dictionary" button
    renderListOfMistakes(mistakenWords); // Show list of incorrect words
  }
}

// Render each misspelled word and its "Add" button to the UI
export function renderListOfMistakes(mistakenWords) {
  for (const word of mistakenWords) {
    // Create a list item to show the misspelled word
    const li = document.createElement("li");
    li.textContent = word;
    listOfMistakes.appendChild(li);

    // Create a button to add this specific word to the dictionary
    const addToDictBtn = createAddToDictBtn(word);
    listOfMistakes.appendChild(addToDictBtn);
  }

  // Make the mistakes section visible
  mistakesMessage.style.display = "block";
}

// Create a button for a single word that, when clicked, adds it to the dictionary
export function createAddToDictBtn(word) {
  const addToDictBtn = document.createElement("button");
  addToDictBtn.classList.add("AddButton");
  addToDictBtn.textContent = "Add word to the dictionary";

  // When clicked, add the word to the dictionary and rerun the spell check
  addToDictBtn.addEventListener("click", () => {
    words.push(word);
    handleInput();
  });

  return addToDictBtn;
}

// Create a button to add all misspelled words to the dictionary at once
export function createAddAllBtn(mistakenWords) {
  const AddAllBtn = document.createElement("button");
  AddAllBtn.classList.add("AddButton");
  AddAllBtn.textContent = "Add all words to the dictionary";
  AddAllBtn.style.marginBottom = "40px";

  // When clicked, add each word to the dictionary and rerun the spell check
  AddAllBtn.addEventListener("click", () => {
    for (const word of mistakenWords) {
      words.push(word);
      handleInput();
    }
  });

  // Add the button to the DOM
  listOfMistakes.appendChild(AddAllBtn);
}
