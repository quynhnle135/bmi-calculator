function getData() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  return { height, weight };
}
function calculateBMIInImperalSystem() {
  const { height, weight } = getData();
  let result = Math.round(703 * (weight / Math.pow(height, 2)) * 100) / 100;
  document.getElementById("result").innerText = `BMI: ${result}`;

  // Display info
  let display = document.getElementById("info");
  if (result < 18.5) {
    display.innerText = "You are very underweight and possibly malnourished.";
  } else if (result >= 18.5 && result <= 24.9) {
    display.innerText =
      "You have a healthy weight range for young and middle-aged adults.";
  } else if (result >= 25.0 && result <= 29.9) {
    display.innerText = "You are overweight.";
  } else if (result >= 30) {
    display.innerText = "You are obese.";
  }
}

function calculateBMIInMetricSystem() {
  const { height, weight } = getData();
  let result = Math.round((weight / Math.pow(height / 100, 2)) * 100) / 100;
  document.getElementById("result").innerText = `BMI: ${result}`;

  // Display info
  let display = document.getElementById("info");
  if (result < 18.5) {
    display.innerText = "You are very underweight and possibly malnourished.";
  } else if (result >= 18.5 && result <= 24.9) {
    display.innerText =
      "You have a healthy weight range for young and middle-aged adults.";
  } else if (result >= 25.0 && result <= 29.9) {
    display.innerText = "You are overweight.";
  } else if (result >= 30) {
    display.innerText = "You are obese.";
  }
}
