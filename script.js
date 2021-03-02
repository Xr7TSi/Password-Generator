



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// var numberOfCharacters = []
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "#", "$", "%", "&", "*", "+", "-", "<", ">", "?", "@"];
var characterBucket = [];
var password = [];


function generatePassword() {

  var numberOfCharactersResponse = prompt ("How long should your password be?");
  var upperCaseResponse = prompt ("Do you want to include upper case letters? Please respond y or n.");
  var lowerCaseResponse = prompt ("Do you want to include lower case letters? Please respond y or n.");
  var numberResponse = prompt ("Do you want to include numbers? Please respond y or n.");
  var specialCharacterResponse = prompt ("Do you want to include special characters? Please respond y or n.");

  if  ((numberOfCharactersResponse < 8) || (numberOfCharactersResponse > 128)) {
    alert("Number of characters must be between 8 and 128.");
     generatePassword();
    }

  if (upperCaseResponse === "y") {
    characterBucket = upperCase.concat(characterBucket);
    } 

  if (lowerCaseResponse === "y") {
    characterBucket = lowerCase.concat(characterBucket);
    } 

  if (numberResponse === "y") {
    characterBucket = number.concat(characterBucket);
    } 

  if (specialCharacterResponse === "y") {
    characterBucket = specialCharacter.concat(characterBucket);
  }  

  for (var i = 0; i < numberOfCharactersResponse; i++) {

    function getPassword(items)
  {
    
  return characterBucket[Math.floor(Math.random()*characterBucket.length)];
      
  }

  console.log(getPassword(characterBucket));

  }

  }


