// Assignment Code
var generateBtn = document.querySelector("#generate");


// Variables
alert("You need a new password")
var passLength = parseInt(prompt("How long do you want your password to be? (must be between 8 and 128 characters)"));
// Defines password length
var specialCharacters = [" !#$%&()*+,-./:;<=>?@[\]^_`{|}~"];
// Defines special characters (sourced from https://owasp.org/www-community/password-special-characters)
var specialCharactersQuery = confirm("Do you want special characters?");
// Confirms if user wants special characters in their password, if yes includes, if no does not. 
var numberCharactersQuery = confirm("Do you want numbers?")
// Confirms if user wants numbers in their password, if yes includes, if no does not.
var lowerCaseCharactersQuery = confirm("Do you want lower case characters?")
// Confirms if user wants lowercase characters in their password, if yes includes, if no does not.
var upperCaseCharactersQuery = confirm("Do you want upper case characters?")
// Confirms if user wants uppercase characters in their password, if yes includes, if no does not.


// Generate Password
// prompt user for password length
  // check to see if the user actually entered a length.
  // 1. special characters, 
  // 2. numbers
  // 3. lower case 
  // 4.uppercase
  // generate password based on user specifications:
  // Note: user specifications come from confirms. (save in variables)
  // 
  // for(var i = 0; i = <=  ; i++) {


  // }


  function generatePassword(){
  
return "something";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
