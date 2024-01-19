// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// }

// // Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);
// prompt user for password options
function getPasswordOptions() {
  var passwordLength = prompt("Please enter a length of the password you would like, between 8 and 128 characters.");

  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log("You have selected a password length of " + passwordLength + " characters.");
    characterTypes(passwordLength);
  } else if (passwordLength < 8) {
    console.log("This is too weak. Please enter a length above 8 characters.");
  } else if (passwordLength > 128) {
    console.log("This is being too cautious! Please enter a password length below 128 characters.");
  }
}

// character selection
function characterTypes(passwordLength) {
  var lowercase = confirm("Would you like to include lowercase characters");
  if (lowercase) {
    var uppercase = confirm("Would you like to include uppercase characters?");
    var numeric = confirm("Would you like to include numeric characters?");
    var special = confirm("Would you like to include special characters?");

    if (!(lowercase || uppercase || numeric || special)) {
      alert("You must select at least one character type.");
    } else {
      generatePassword(passwordLength, lowercase, uppercase, numeric, special);
    }
  } else {
    console.log("Lowercase characters will NOT be included in your password.");
  }
}

// randomise
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// generate password withinput
function generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
  var allCharacters = [];
  if (includeLowercase) allCharacters = allCharacters.concat(lowerCasedCharacters);
  if (includeUppercase) allCharacters = allCharacters.concat(upperCasedCharacters);
  if (includeNumeric) allCharacters = allCharacters.concat(numericCharacters);
  if (includeSpecial) allCharacters = allCharacters.concat(specialCharacters);

  if (allCharacters.length === 0) {
    alert("You must select at least one character type.");
  } else {
    var password = '';
    for (var i = 0; i < passwordLength; i++) {
      password += getRandom(allCharacters);
    }
    console.log("Generated password: " + password);

    // Display 
    var passwordText = document.getElementById('password');
    passwordText.value = password;
  }
}


var generateBtn = document.getElementById('generate');

// Add event listener to generate button
generateBtn.addEventListener('click', getPasswordOptions);
