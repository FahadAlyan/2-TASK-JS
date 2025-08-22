
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
function checkUser() {
  let value = document.getElementById("userInput").value;
  let num = Number(value);

  if (isNaN(num)) {
    document.getElementById("userResult").innerText = "Please enter a valid number!";
    return;
  }

  let next;

  if (Number.isInteger(num)) {
    next = num + 1;
  } else {
    next = Math.round((num + 0.1) * 10) / 10;
  }

  document.getElementById("userResult").innerText = next;
}



// Task: Capitalize full name (first, middle, last)

function capitalizeName() {
  let name = document.getElementById("nameInput").value;   

  if (name == "") {
    document.getElementById("nameResult").innerText = "Please enter name!";
    return;
  }
  let parts = name.split(" ");  
  for (let i = 0; i < parts.length; i++) {
    if (parts[i].length > 0) {
      parts[i] = parts[i][0].toUpperCase() + parts[i].substring(1).toLowerCase();
    }
  }
  let finalName = parts.join(" ");  
  document.getElementById("nameResult").innerText = finalName;
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

// Task 6: First & Last Element of Random Array
let arr = [];  
function generateArray() {
  arr = []; 
  for (let i = 0; i < 5; i++) {
    let num = Math.floor(Math.random() * 100) + 1; 
    arr.push(num);
  }
  document.getElementById("arrayDisplay").innerText = "Array: " + arr;
}
function pickFirstLast() {
  if (arr.length == 0) {
    document.getElementById("firstLastResult").innerText = "Please generate array first!";
  } else {
    let first = arr[0];
    let last = arr[arr.length - 1];
    document.getElementById("firstLastResult").innerText = "First: " + first + "  Last: " + last;
  }
}



