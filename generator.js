const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = upperCase.toLowerCase();
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~|}{[]:;?><,./-=";
const allChars = upperCase + lowerCase + numbers + symbols;

const passwordValue = document.getElementById("password");

const createPassword = () => {
  let = password = "";
  password += numbers[getRandomNumber(numbers.length)];
  password += numbers[getRandomNumber(numbers.length)];
  password += numbers[getRandomNumber(numbers.length)];
  password += symbols[getRandomNumber(symbols.length)];
  password += symbols[getRandomNumber(symbols.length)];
  password += lowerCase[getRandomNumber(lowerCase.length)];
  password += upperCase[getRandomNumber(upperCase.length)];
  password += allChars[getRandomNumber(allChars.length)];
  password += allChars[getRandomNumber(allChars.length)];
  password += allChars[getRandomNumber(allChars.length)];
  console.log("before shuffling Password is:\n", password);
  passwordValue.innerText = shufflePassword(password);
  // passwordValue.innerText = password.split('').sort(function(){return 0.5-Math.random()}).join(''); // alternate way to shuffle
};

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
}; // if input is 3 then expected output: 0, 1 or 2

const shufflePassword = (text) => {
  var parts = text.split("");
  for (var i = 0; i < 10; i++) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = parts[i];
    parts[i] = parts[j];
    parts[j] = temp;
  }
  return parts.join("");
};

const copyPassword = () => {
  navigator.clipboard.writeText(passwordValue.innerText);
};

const btnEvent = document.getElementById("myBtn");
btnEvent.addEventListener("click", createPassword);

const copyEvent = document.getElementById("copy");
copyEvent.addEventListener("click", copyPassword);
