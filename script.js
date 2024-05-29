// Function to encrypt using a Caesar Cipher
function encryptCaesar(plaintext, shift) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let ciphertext = "";

  for (let i = 0; i < plaintext.length; i++) {
    let char = plaintext[i].toUpperCase();
    if (alphabet.includes(char)) {
      let index = (alphabet.indexOf(char) + shift) % 26;
      ciphertext += alphabet[index];
    } else {
      ciphertext += char; // Non-alphabet characters remain the same
    }
  }
  return ciphertext;
}

// Function to decrypt using a Caesar Cipher
function decryptCaesar(ciphertext, shift) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let plaintext = "";

  for (let i = 0; i < ciphertext.length; i++) {
    let char = ciphertext[i].toUpperCase();
    if (alphabet.includes(char)) {
      let index = (alphabet.indexOf(char) - shift + 26) % 26;
      plaintext += alphabet[index];
    } else {
      plaintext += char; // Non-alphabet characters remain the same
    }
  }
  return plaintext;
}

// Function to handle encryption
function encrypt() {
  const plaintext = document.getElementById("plaintext").value;
  const shift = parseInt(document.getElementById("shift").value);
  const encryptedText = encryptCaesar(plaintext, shift);
  document.getElementById("ciphertext").value = encryptedText;
}

// Function to handle decryption
function decrypt() {
  const ciphertext = document.getElementById("ciphertext").value;
  const shift = parseInt(document.getElementById("shift").value);
  const decryptedText = decryptCaesar(ciphertext, shift);
  document.getElementById("plaintext").value = decryptedText;
}

// Example usage
const plaintext = "HELLO WORLD";
const shift = 3;

const encryptedText = encryptCaesar(plaintext, shift);
console.log("Encrypted Text:", encryptedText);

const decryptedText = decryptCaesar(encryptedText, shift);
console.log("Decrypted Text:", decryptedText);
