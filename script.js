function encrypt() {
  const key = document.getElementById("key").value.toUpperCase();
  if (!isValidKey(key)) {
    alert("Invalid key. Please enter a key with 26 unique letters.");
    return;
  }
  const plaintext = document.getElementById("plaintext").value.toUpperCase();
  const ciphertext = transformText(plaintext, key, true);
  document.getElementById("ciphertext").value = ciphertext;
}

function decrypt() {
  const key = document.getElementById("key").value.toUpperCase();
  if (!isValidKey(key)) {
    alert("Invalid key. Please enter a key with 26 unique letters.");
    return;
  }
  const ciphertext = document.getElementById("ciphertext").value.toUpperCase();
  const plaintext = transformText(ciphertext, key, false);
  document.getElementById("plaintext").value = plaintext;
}

function isValidKey(key) {
  const uniqueLetters = new Set(key);
  return key.length === 26 && uniqueLetters.size === 26 && /^[A-Z]+$/.test(key);
}

function transformText(text, key, isEncrypting) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const keyMap = {};

  if (isEncrypting) {
    for (let i = 0; i < alphabet.length; i++) {
      keyMap[alphabet[i]] = key[i];
    }
  } else {
    for (let i = 0; i < alphabet.length; i++) {
      keyMap[key[i]] = alphabet[i];
    }
  }

  let result = "";
  for (let char of text) {
    result += keyMap[char] || char;
  }
  return result;
}
