// Assignment Code
var generateBtn = document.querySelector("#generate");

alert("You need a new password");
// Variables

var specialCharactersQuery = confirm("Do you want special characters?");
//Confirms if user wants special characters in their password,
// if yes includes, if no does not. Shorthand is S

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
// if yes includes, if no does not. Shorthand is N

var numberCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// Defines numbers for use in password

var lowerCaseCharactersQuery = confirm("Do you want lower case characters?");
// // Confirms if user wants lowercase characters in their password, if yes includes,
// if no does not. Shorthand is Lc

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
// if yes includes, if no does not. Shorthand is Uc

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

var allConfirm = [
  upperCaseCharacters +
    lowerCaseCharacters +
    numberCharacters +
    specialCharacters
];
var SNLc = [lowerCaseCharacters + numberCharacters + specialCharacters];
var SNUc = [upperCaseCharacters + numberCharacters + specialCharacters];
var SLcUc = [upperCaseCharacters + lowerCaseCharacters + specialCharacters];
var NLcUc = [numberCharacters + lowerCaseCharacters + specialCharacters];
var SN = [numberCharacters + specialCharacters];
var SLc = [lowerCaseCharacters + specialCharacters];
var SUc = [specialCharacters + upperCaseCharacters];
var NLc = [numberCharacters + lowerCaseCharacters];
var Nuc = [numberCharacters + upperCaseCharacters];
var LcUc = [lowerCaseCharacters + upperCaseCharacters];

var passLength = parseInt(
  prompt(
    "How long do you want your password to be? (must be an integer between 8 and 128)"
  )
);
// Defines password length

// Generate Password
// prompt user for password length
// check to see if the user actually entered a length.
// 1. special characters,
// 2. numbers
// 3. lower case
// 4.uppercase
// generate password based on user specifications:
// Note: user specifications come from confirms. (save in variables)

// Figure out how to deny access or reload page if password does not meet parameters


function generatePassword() {
  // for (var i = 0; i <= passLength; i++) {
    
  const matchedParameterValues = []
  if ((upperCaseCharactersQuery) matchedParameterValues = matchedParameterValues.concat(upperCaseCharacters))
  if ((lowerCaseCharactersQuery) matchedParameterValues = matchedParameterValues.concat(lowerCaseCharacters))
  if ((specialCharactersQuery) matchedParameterValues = matchedParameterValues.concat(specialCharacters))
  if ((numberCharactersQuery) matchedParameterValues = matchedParameterValues.concat(numberCharacters))
  if (passLength < 8 || passLength > 128) {
    alert("Follow password length instructions please!");
  } else if (
    (upperCaseCharactersQuery &&
      lowerCaseCharactersQuery &&
      numberCharactersQuery &&
      specialCharactersQuery) === true
  // ) {(for (var i = 0; i <= passLength; i++) {
    
    var actualPass =
    return actualPass
        
    );
  } else if (
    (lowerCaseCharactersQuery &&
      numberCharactersQuery &&
      specialCharactersQuery) === true
  ) {
    return "your password is " + SNLc[Math.floor(Math.random() * SNLc.length)];
  } else {
    return "Please select all categories for a secure password";
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Current errors:
// Need to figure out how to select random elements of the array, instead of just... random array. for loop?
// Code is not DRY compliant. 