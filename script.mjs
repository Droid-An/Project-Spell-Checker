import words from "./words.json" with { type: "json" };

export function checkText(text) {
  const wordsList = text.split(" ");
  console.log(wordsList);
  const mistakenWords = [];
  for (const word of wordsList) {
    // Remove punctuation around the word
    const cleanedWord = word.replace(/^[^\w']+|[^\w']+$/g, "").toLowerCase();
    if (cleanedWord === "") continue;
    if (word[0] === word[0].toUpperCase()) continue;
    // Check for hyphenated words
    const parts = cleanedWord.split("-");

    // A word is valid only if ALL parts are in the dictionary
    const isValid = parts.every((part) => words.includes(part));

    if (!words.includes(cleanedWord) && !isValid) {
      mistakenWords.push(cleanedWord);
    }
  }

  console.log(mistakenWords);
  return mistakenWords;
}
