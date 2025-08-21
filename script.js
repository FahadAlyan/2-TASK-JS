
// Task 1: Age → Days
function convertToDays() {
  const ageInput = document.getElementById("age").value;
  const age = Number(ageInput);

  if (!ageInput || age < 0) {
    document.getElementById("ageResult").innerText = " Please enter a valid age";
    return;
  }

  const days = age * 365;
  document.getElementById("ageResult").innerText = age + " years = " + days + " days";
}
// Task 2: Hours → Seconds
function convertToSeconds() {
  const hoursInput = document.getElementById("hours").value;
  const hours = Number(hoursInput);

  if (!hoursInput || hours < 0) {
    document.getElementById("hoursResult").innerText = " Please enter valid hours!";
    return;
  }

  const seconds = hours * 3600;
  document.getElementById("hoursResult").innerText = hours + " hours = " + seconds + " seconds";
}
// Task 3: Next Number in Array


const numbers = [10, 20, 30, 40, 50];

function findNextInArray(arr,num) {
  const index = arr.indexOf(num);
  if (index === -1) {
    return "Number not found in the array.";
  }
  if (index === arr.length - 1) {
    return "This is the last number in the array.";
  }
  return  arr[index + 1];       
}
function checkArray() {
  const value = Number(document.getElementById("arrayInput").value);
  const result = findNextInArray(numbers, value);
  document.getElementById("arrayResult").innerText =   result;
}
// Task 4 :

function findNextNumber(input) {
  const number = Number(input);
  if (isNaN(number)) return "Please enter a valid number";
  return number + 1;
}

function checkUser() {
  const value = document.getElementById("userInput").value;
  const result = findNextNumber(value);
  document.getElementById("userResult").innerText =   result;
}
// Task 5: Capitalize Name

function capitalizeName() {
  const name = document.getElementById("nameInput").value;
  if (!name) {
    document.getElementById("nameResult").innerText = "Please enter your name!";
    return;
  }
  const capitalized = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  document.getElementById("nameResult").innerText =  capitalized;
}

// Task 6: BMI Calculator
function calculateBMI() {
  const weight = Number(document.getElementById("weight").value);
  const height = Number(document.getElementById("height").value);
  if (!weight || !height || weight <= 0 || height <= 0) {
    document.getElementById("bmiResult").innerText = "Please enter valid weight and height!";
    return;
  }
  const bmi = weight / (height * height);
  document.getElementById("bmiResult").innerText = "Your BMI is: " + bmi.toFixed(2);
}


