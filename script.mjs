// This is a placeholder file which shows how you can access JSON data defined in other files.
// It can be loaded into index.html.
// You can delete the contents of the file once you have understood how it works.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { getDictionarySize } from "./common.mjs";
import words from "./words.json" with { type: "json" };

const checkButton = document.querySelector("#checkButton");
const textInput = document.querySelector("#textInput");
const listOfMistakes = document.querySelector("#listOfMistakes");
const mistakesMessage = document.querySelector("#mistakesMessage");

checkButton.addEventListener("click",  (e)=>  {
  e.preventDefault();
  const wordsList = textInput.value.split(" ");
  const mistakenWords = [];
  for (const word of wordsList) {
    console.log(word);
    if (!words.includes(word)) {
      mistakenWords.push(word);
    }
  }
  listOfMistakes.innerHTML = "";
  mistakesMessage.style.display = "none";
  console.log(mistakenWords);
  if (mistakenWords[0] !== "" ) { //'' is counted as a item in array
    renderListOfMistakes(mistakenWords);
  }
});

function renderListOfMistakes(mistakenWords) {
  for (const word of mistakenWords) {
    const li = document.createElement("li");
    li.textContent = word;
    listOfMistakes.appendChild(li);
    const addToDictBtn = document.createElement("button");
    addToDictBtn.textContent = "Add word to the dictionary"
    listOfMistakes.appendChild(addToDictBtn)
  }
  mistakesMessage.style.display = "block";
}

// window.onload = function () {
//   document.querySelector(
//     "body"
//   ).innerText = `There are ${getDictionarySize()} words in the Basic English dictionary`;
// };
