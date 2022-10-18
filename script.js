// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomItem(list) {
  return list[randomInt(0, list.length - 1)];
}

//Code for the pop-up user input prompts.
function generatePassword() {
  var userInput = window.prompt("How long would you like your password to be?");

  var passwordLength = parseInt(userInput);

  if (isNaN(passwordLength)) {
    window.alert("That is not a number");
    return;
  } else {
    window.alert("That is a valid number");
  }
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 and 128");
    return null;
  }
  
  var userWantsnumericCharacters = window.confirm(
    "Would you like to include numbers in your password?"
  );
  var userWantsspecialCharacters = window.confirm(
    "Would you like to include syumbols in your password?"
  );
  var userWantsupperCasedCharacters = window.confirm(
    "Would you like to include upper case letters in your password?"
  );
  var userWantslowerCasedCharacters = window.confirm(
    "Would you like to include lower case letters your password?"
  );
  
  var specialCharactersList = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "+",
    "'",
    "{",
    "}",
    "[",
    "]",
    "<",
    ">",
    "=",
    ".",
    ",",
    "|",
    "/",
    "~",
    "`",
  ];
  var upperCasedCharactersList = [
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
    "Z",
  ];
  var lowerCasedCharactersList = [
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
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var numericCharactersList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
  var getPasswordOptions = [];
  
  if (userWantsnumericCharacters === true) {
    getPasswordOptions.push(numericCharactersList);
  }
  
  if (userWantsspecialCharacters === true) {
    getPasswordOptions.push(specialCharactersList);
  }
  
  if (userWantsupperCasedCharacters === true) {
    getPasswordOptions.push(upperCasedCharactersList);
  }
  
  if (userWantslowerCasedCharacters === true) {
    getPasswordOptions.push(lowerCasedCharactersList);
  }
  
  var result = [];
  var guaranteedChars = [];
  var possibleChars = [];
  console.log(passwordLength)
  //console.log(getPasswordOptions.flat())
  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(getPasswordOptions);
    var randomChar = getRandomItem(randomList);
    guaranteedChars.push(randomChar);
    result[i] = randomList[i]
    console.log(randomList)
    console.log(randomChar);
  }
  return result.join(
    ''
  )
}

// Write password to the #password input
function writePassword(_a, _b, _c) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
