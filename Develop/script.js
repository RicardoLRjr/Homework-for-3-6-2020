// Assignment Code
var generateBtn = document.querySelector("#generate");

alert("You need a new password")
// Variables

var passLength = parseInt(prompt("How long do you want your password to be? (must be an integer between 8 and 128)"));
// Defines password length
console.log(passLength)
var specialCharacters = ["!",",","#","$", "%", "&", "(",")", "*","+","-",",","."/":",";",","<",","=",">","?",
"@","[","/","]","^","_","`","{","|","}","~"];
console.log(specialCharacters)
// Defines special characters (sourced from https://owasp.org/www-community/password-special-characters)
var specialCharactersQuery = confirm("Do you want special characters?");
console.log(specialCharactersQuery)
// Confirms if user wants special characters in their password, if yes includes, if no does not. 
var numbercharacters = ["1","2","3","4","5","6","7","8","9","0"]
console.log(numbercharacters)
var numberCharactersQuery = confirm("Do you want numbers?");
console.log(numberCharactersQuery)
// Confirms if user wants numbers in their password, if yes includes, if no does not.
var lowerCaseCharactersQuery = confirm("Do you want lower case characters?");
console.log(lowerCaseCharactersQuery)
// Confirms if user wants lowercase characters in their password, if yes includes, if no does not.
var upperCaseCharactersQuery = confirm("Do you want upper case characters?");
console.log(upperCaseCharactersQuery)
// Confirms if user wants uppercase characters in their password, if yes includes, if no does not.
// var userPassword = ;
// Final password.


// Generate Password
// prompt user for password length
  // check to see if the user actually entered a length.
  // 1. special characters, 
  // 2. numbers
  // 3. lower case 
  // 4.uppercase
  // generate password based on user specifications:
  // Note: user specifications come from confirms. (save in variables)




  // for(var i = 0; i = <=  ; i++) {


  // }


  function generatePassword(){
  
return "test";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
