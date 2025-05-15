function convertTemp() {
  const degrees = parseFloat(document.getElementById("degrees").value);
  const type = document.getElementById("type").value;
  const resultBox = document.getElementById("result");

  if (isNaN(degrees)) {
    resultBox.textContent = "Please enter a valid number";
    return;
  }

  let result;
  if (type === "fahrenheit") {
    result = ((degrees - 32) * 5) / 9;
    resultBox.textContent = result.toFixed(4) + " °C";
  } else {
    result = (degrees * 9) / 5 + 32;
    resultBox.textContent = result.toFixed(4) + " °F";
  }
}