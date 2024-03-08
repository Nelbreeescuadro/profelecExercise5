// Encryption
let originalText = prompt("Enter text to encrypt").toUpperCase();
let encryptedText = '';

const plainAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const cipherAlphabet = ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C'];

for (let i = 0; i < originalText.length; i++) {
  let char = originalText[i];
  let index = plainAlphabet.indexOf(char);
  if (index !== -1) {
    encryptedText += cipherAlphabet[index];
  } else {
    encryptedText += char; 
  }
}

console.log("Encrypted Text:", encryptedText);

// Decryption
let inputToDecrypt = prompt("Enter text to decrypt");

let decryptedText = '';

for (let i = 0; i < inputToDecrypt.length; i++) {
  let char = inputToDecrypt[i].toUpperCase();
  let index = cipherAlphabet.indexOf(char);
  if (index !== -1) {
    decryptedText += plainAlphabet[index];
  } else {
    decryptedText += char; 
  }
}

console.log("Decrypted Text:", decryptedText);
