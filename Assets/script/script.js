// Declaring variables for character options
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numeric = '0123456789';
var special = '~`!@#$%^&*()-_+={}[]|:;/\"\'\\<>,.?';

// Password Length is required between 8-128 characters
function generatePassword() {
  var generatedPasswordLength = parseInt(prompt('Choose a number of characters between 8 and 128 for your password!'));
  if (generatedPasswordLength >= 8 && generatedPasswordLength <= 128) {
    console.log(generatedPasswordLength);

    // Confirm the characters the user may use
    var includeLowercase = confirm('Inlcude Lowercase characters in your password?'); 
    var includeUppercase = confirm('How about some UPPERCASE characters?'); 
    var includeNumeric = confirm('How do we feel about including some numbers?'); 
    var includeSpecial = confirm('Last one! Do we want some Special Characters or Symbols?'); 
    
    // Make sure the user selects 1 of the 4 criteria minimum to continue
    if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
      window.alert('Sorry to stop you here, but you have to select at least ONE of the FOUR options to continue! Please try again :)');
      return ("Password Not Generated.");
    }

    // Create an array that stores the chosen character options
    var userSelectedCharacters = []
    if (includeLowercase) {
        userSelectedCharacters += lowercase;
    }
    if (includeUppercase) {
        userSelectedCharacters += uppercase;
    }
    if (includeNumeric) {
        userSelectedCharacters += numeric;
    }
    if (includeSpecial) {
        userSelectedCharacters += special;
    }

    // Use a loop to use selected data and output password
    var password = ""
    for (let i = 0; i < generatedPasswordLength; i++) {
      var index = Math.floor(Math.random() * userSelectedCharacters.length);
      password += userSelectedCharacters[index];
    }
    console.log(password);
    window.alert("Your password has been generated!");
    return password;

    //if incorrect password length
  } else {
    window.prompt('The value input was incorrect. Choose a number that is between 8 and 128.');
    return 'Password Not Generated. Click "Generate Password" button to start again.'
  }
}

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