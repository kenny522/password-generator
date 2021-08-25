// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  //Create the function to execute for generate password
  function generatePassword() {
    // Defined the digits, alphabet, special characters, uppercase and lowercase.
    // Used Unicode characters in place of actual special character symbols to make things neat and less of a hassle to type every symbol.
    var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var alphabet = [
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
      "z",
    ];
    var uppercase = [
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
    var specialCharacters = [
      "\u0020",
      "\u0021",
      "\u0022",
      "\u0023",
      "\u0024",
      "\u0025",
      "\u0026",
      "\u0027",
      "\u0028",
      "\u0029",
      "\u002A",
      "\u002B",
      "\u002C",
      "\u002D",
      "\u002E",
      "\u002F",
      "\u003A",
      "\u003B",
      "\u003C",
      "\u003D",
      "\u003E",
      "\u003F",
      "\u0040",
      "\u005B",
      "\u005C",
      "\u005D",
      "\u005E",
      "\u005F",
      "\u0060",
      "\u007B",
      "\u007C",
      "\u007D",
      "\u007E",
    ];
    var allCharacters = uppercase.concat(alphabet, digits, specialCharacters);
    // The Password length prompt was used to ask user to pick a number between 8-128.
    // Used if and else if statements to get the section of numbers within range between 8-128.
    var passwordLength = prompt(
      "Please choose the length of your password. Password must be a number between 8 and 128."
    );
    if (passwordLength === "") {
      alert("Please select the length of your password.");
      return;
    } else if (passwordLength === "invalid") {
      return;
    }
    if (parseInt(passwordLength) <= 128 && parseInt(passwordLength) >= 8) {
      var confirmation = confirm(
        `You have selected a password that is ${parseInt(
          passwordLength
        )} characters long.`
      );
      if (confirmation === false) {
        return;
      }
      console.log(
        `User selected a password that is ${parseInt(
          passwordLength
        )} characters long`
      );
    } else if (parseInt(passwordLength) > 128 || parseInt(passwordLength) < 8) {
      alert("Please select a number within the range of 8 and 128.");
      return;
    }
    // This section was for the user prompt to select a character when generating a password.
    // Had to use an array in order to return the generating password characters.
    var userTypes = prompt(
      "Choose the characters you would like in your password: lowercase. uppercase. numbers. special characters. all."
    );
    if (userTypes === null) {
      return;
    }
    var lastPassword = [];
    // In this section the if and else if statements were used to return each of the values.
    // lowercase, uppercase, numbers, and special characters.
    if (userTypes.toLowerCase() === "lowercase") {
      for (i = 0; i < passwordLength; i++) {
        lastPassword.push(
          alphabet[Math.floor(Math.random() * alphabet.length)]
        );
      }
      console.log("User password is:" + lastPassword.join(""));
      alert(
        "Password will be displayed in the text field. Please store it in a safe spot."
      );
      return lastPassword.join("");
    } else if (userTypes.toLowerCase() === "uppercase") {
      for (i = 0; i < passwordLength; i++) {
        lastPassword.push(
          uppercase[Math.floor(Math.random() * uppercase.length)]
        );
      }
      console.log("User password is:" + lastPassword.join(""));
      alert(
        "Password will be displayed in the text field. Please store it in a safe spot."
      );
      return lastPassword.join("");
    } else if (userTypes.toLowerCase() === "numbers") {
      for (i = 0; i < parseInt(passwordLength); i++) {
        lastPassword.push(digits[Math.floor(Math.random() * 10)]);
      }
      console.log("User password is:" + lastPassword.join(""));
      alert(
        "Password will be displayed in the text field. Please store it in a safe spot."
      );
      return lastPassword.join("");
    } else if (userTypes.toLowerCase() === "special characters") {
      for (i = 0; i < parseInt(passwordLength); i++) {
        lastPassword.push(
          specialCharacters[
            Math.floor(Math.random() * specialCharacters.length)
          ]
        );
      }
      console.log("User password is:" + lastPassword.join(""));
      alert(
        "Password will be displayed in the text field. Please store it in a safe spot."
      );
      return lastPassword.join("");
    } else if (userTypes.toLowerCase() === "all") {
      var allCharacters = uppercase.concat(alphabet, digits, specialCharacters);
      for (i = 0; i < parseInt(passwordLength); i++) {
        lastPassword.push(
          allCharacters[Math.floor(Math.random() * allCharacters.length)]
        );
      }
      console.log("User password is:" + lastPassword.join(""));
      alert(
        "Password will be displayed in the text field. Please store it in a safe spot."
      );
      return lastPassword.join("");
    } else {
      alert("Please choose another option");
      // code wasnt working at first and I realized I forgot to add curly braces around the block of code.
    }
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
