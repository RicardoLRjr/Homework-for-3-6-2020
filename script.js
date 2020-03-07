// Assignment Code
var generateBtn = document.querySelector("#generate");

alert("You need a new password");
// Variables

var specialCharactersQuery = confirm("Do you want special characters?");
//Confirms if user wants special characters in their password,
// if yes includes, if no does not.

var specialCharacters = [
  "!",
  ",",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  "-",
  ",",
  ".",
  "/",
  ":",
  ";",
  ",",
  "=",
  ">",
  "?",
  "@",
  "[",
  "/",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~"
];
// Defines special characters (sourced from https://owasp.org/www-community/password-special-characters)

var numberCharactersQuery = confirm("Do you want numbers?");
// Confirms if user wants numbers in their password,
// if yes includes, if no does not.

var numberCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// Defines numbers for use in password

var lowerCaseCharactersQuery = confirm("Do you want lower case characters?");
// // Confirms if user wants lowercase characters in their password, if yes includes,
// if no does not.

var lowerCaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
// defines lowercase characters

var upperCaseCharactersQuery = confirm("Do you want upper case characters?");
// Confirms if user wants uppercase characters in their password,
// if yes includes, if no does not.

var upperCaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
// Defines uppercase characters.

var passLength = parseInt(
  prompt(
    "How long do you want your password to be? (must be an integer between 8 and 128)"
  )
);

var actualPass = [];
// Variable that returns eventual password.

// Function that generates password according to parameters selected.
function generatePassword() {
    var matchedParameterValues = [];
    for (var i = 0; i <= passLength; i++) {
      if (numberCharactersQuery)
        matchedParameterValues = matchedParameterValues.concat(
          numberCharacters
        );
      if (upperCaseCharactersQuery)
        matchedParameterValues = matchedParameterValues.concat(
          upperCaseCharacters
        );
      if (lowerCaseCharactersQuery)
        matchedParameterValues = matchedParameterValues.concat(
          lowerCaseCharacters
        );
      if (specialCharactersQuery)
        matchedParameterValues = matchedParameterValues.concat(
          specialCharacters
        );
    }

    if (passLength < 8 || passLength > 128) {
      alert(
        "Follow password length instructions please! To get a new password, refresh the page"
      );
    } else {
      for (var i = 0; i < passLength; i++) {
        for (var j = 0; j < passLength; j++) {
          var indexNum = Math.floor(Math.random() * 10 + 1);
        }
        var Pass2 = matchedParameterValues[indexNum];
        actualPass.push(Pass2);
      }
      return "your password is " + actualPass.join("");
    }
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = "your password is " + actualPass.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
