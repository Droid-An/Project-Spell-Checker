// Import the Basic English word list from a JSON file
import words from "./words.json" with { type: "json" };

// This function checks a given text for spelling mistakes
export function checkText(text) {
  // Split the input text into words using regExp
  const wordsList = text.split(/\s+/);

  const mistakenWords = [];

  // Iterate over each word in the text
  for (const word of wordsList) {
    // Remove leading/trailing punctuation (excluding apostrophes)
    const cleanedWord = word.replace(/^[^\w']+|[^\w']+$/g, "");

        // Skip empty strings after cleaning
    if (cleanedWord === "") {
      continue;
    }

    // Ignore capitalized words
    if (cleanedWord[0] === cleanedWord[0].toUpperCase()) {
      continue;
    }

    // Convert to lowercase
    const cleanedWordLowerCase = cleanedWord.toLowerCase();

    // Check for hyphenated words
    const parts = cleanedWordLowerCase.split("-");

    // If the entire word is not in the dictionary
    if (!words.includes(cleanedWordLowerCase)) {
      if (parts.length > 1) {
        // For hyphenated words, check each part individually
        for (let part of parts) {
          if (!words.includes(part)) {
            // Add only invalid parts to the mistaken words list
            mistakenWords.push(part);
          }
        }
      } else {
        // Add the whole cleaned word if it's not hyphenated and not found
        mistakenWords.push(cleanedWordLowerCase);
      }
    }
  }

  // Return the array of mistaken (unrecognized) words
  return mistakenWords;
}
