let userInput = prompt("Enter text:");

let characterCount = userInput.length;
console.log("The number of characters in your text is " + characterCount);

let wordsArray = userInput.split(" ");
console.log("The word count is " + wordsArray.length);

let sentenceArray = userInput.split(/[.!?]/g);
let sentenceCount = parseInt(sentenceArray.length) - 1;
console.log("The number of sentences is " + sentenceCount);

const wordOccurrences = {};

for (let word of wordsArray) {
    wordOccurrences[word] = (wordOccurrences[word] || 0) + 1;
}
let mostFrequentWord = '';
let maxFrequency = 0;
for (let word in wordOccurrences) {
    if (wordOccurrences[word] > maxFrequency) {
        maxFrequency = wordOccurrences[word];
        mostFrequentWord = word;
    }
}
console.log("The most frequent word is:", mostFrequentWord);
console.log("Frequency:", maxFrequency);

let totalCharacters = 0;
for (let i = 0; i < wordsArray.length; i++) {
    totalCharacters += wordsArray[i].length; 
}
const averageWordLength = totalCharacters / wordsArray.length;

console.log("Average word length:", averageWordLength.toFixed(2)); 
