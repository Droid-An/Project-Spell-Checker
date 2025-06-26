// Import the handleInput function from the UI rendering module
import { handleInput } from "./UI/render.mjs";

// Get reference to the "Check spelling" button
const checkButton = document.querySelector("#checkButton");

// Add event listener to the button for click events
checkButton.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission or page reload
  handleInput(); // Call the function to process and display results
});

// Get references to the textarea input and result display elements
const textInputField = document.querySelector("#textInput");
const listOfMistakes = document.querySelector("#listOfMistakes");
const mistakesMessage = document.querySelector("#mistakesMessage");

// Handle key presses before the character is rendered (keydown)
textInputField.addEventListener("keydown", (e) => {
  // If Ctrl+Enter is pressed, don't clear the output
  if (e.ctrlKey && e.key === "Enter") return;

  // Otherwise, clear previous mistakes when user types anything
  listOfMistakes.innerHTML = "";
  mistakesMessage.style.display = "none";
});

// Handle key presses after the character is rendered (keyup)
textInputField.addEventListener("keyup", (e) => {
  // If Ctrl+Enter is pressed
  if (e.ctrlKey && e.key === "Enter") {
    e.preventDefault();
    handleInput(); // Trigger the spell-checking function
  }
});
