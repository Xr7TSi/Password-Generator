

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);


var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "#", "$", "%", "&", "*", "+", "-", "<", ">", "?", "@"];
var characterBucket = [];
var passwordToStringify = [];
var password = [];


function generatePassword() {

  var numberOfCharactersResponse = prompt ("How long should your password be?");
  var upperCaseResponse = prompt ("Do you want to include upper case letters? Please respond y or n.");
  var lowerCaseResponse = prompt ("Do you want to include lower case letters? Please respond y or n.");
  var numberResponse = prompt ("Do you want to include numbers? Please respond y or n.");
  var specialCharacterResponse = prompt ("Do you want to include special characters? Please respond y or n.");

  if  ((numberOfCharactersResponse < 8) || (numberOfCharactersResponse > 128)) {
    alert("Number of characters must be between 8 and 128."); numberOfCharactersResponse = (null);
     generatePassword();
    }

  if (upperCaseResponse === "y") {
    characterBucket = upperCase.concat(characterBucket);
    } else if (upperCaseResponse === "n") {
      characterBucket = characterBucket} 
      else{ numberOfCharactersResponse = (null); upperCaseResponse = (null);
      alert("Please respond with lower case y or n.");
      generatePassword();
      }

  if (lowerCaseResponse === "y") {
    characterBucket = lowerCase.concat(characterBucket);
    } else if (lowerCaseResponse === "n") {
      characterBucket = characterBucket} 
      else{ numberOfCharactersResponse = (null); upperCaseResponse = (null); lowerCaseResponse =(null);
      alert("Please respond with lower case y or n.");
      generatePassword();
      }

  if (numberResponse === "y") {
    characterBucket = number.concat(characterBucket);
    } else if (numberResponse === "n") {
      characterBucket = characterBucket} 
      else{ numberOfCharactersResponse = (null); upperCaseResponse = (null); lowerCaseResponse =(null); numberResponse = (null);
      alert("Please respond with lower case y or n.");
      generatePassword();
      }

  if (specialCharacterResponse === "y") {
    characterBucket = specialCharacter.concat(characterBucket);
  }  else if (specialCharacterResponse === "n") {
    characterBucket = characterBucket} 
    else{ numberOfCharactersResponse = (null); upperCaseResponse = (null); lowerCaseResponse =(null); numberResponse = (null); specialCharacterResponse = (null);
    alert("Please respond with lower case y or n.");
    generatePassword();
    }

  for (var i = 0; i < numberOfCharactersResponse; i++) {
   passwordToStringify.push (characterBucket[Math.floor(Math.random()*characterBucket.length)]);
  }
  password = (passwordToStringify.join(''));

  if (upperCaseResponse === "n" && lowerCaseResponse === "n" && numberResponse === "n" && specialCharacterResponse === "n") {
    numberOfCharactersResponse = (null); upperCaseResponse = (null); lowerCaseResponse =(null); numberResponse = (null); specialCharacterResponse = (null);
    alert("Please select at least one character type.");
    generatePassword();
  } 

  return password

  }

 

  
  

