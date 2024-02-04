// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("Enter password length ( 8 - 128 ):");

  // Validate the password length input
  if (passwordLength !== null && passwordLength !== "") {
    passwordLength = parseInt(passwordLength);
    if (passwordLength >= 8 && passwordLength <= 128) {
      var useUppercase = confirm("Include Uppercase letters?");
      var useLowercase = confirm("Include Lowercase letters?");
      var useNumbers = confirm("Include Numbers?");
      var useSpecialCharacters = confirm("Include Special characters?");
      var password = generatePassword(passwordLength, useUppercase, useLowercase, useNumbers, useSpecialCharacters);
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
    } else {
      alert("Password length must be between 8 and 128 characters.");
    }
  }
}

// Function to generate a random password
function generatePassword(length, useUppercase, useLowercase, useNumbers, useSpecialCharacters) {
  var charset = "";
  
  if (useLowercase) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }
  if (useNumbers) {
    charset += "0123456789";
  }
  if (useSpecialCharacters) {
    charset += "!@#$%^&*()_-+=<>?";
  }
  if (useUppercase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  
  var password = "";
  
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
