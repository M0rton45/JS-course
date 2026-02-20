let count = 0;
let displayValue = "";
let firstValue = "";
let operatorChosen = "";
let result;
const resultElement = document.getElementById("result");
//It's a function which get's variable from caluclator
// par cho is a number 1,2,3...
function calc(chosen) {
  displayValue += chosen;
  if (resultElement.textContent === "0000") {
    resultElement.textContent = displayValue;
  } else {
    resultElement.textContent += displayValue;
  }
}

// par op is a string with +/- etc..
function operation(operator) {
  count++;
  if (operator === "=") {
    console.log(firstValue, operatorChosen, displayValue);
    displayValue = "";
  } else if (count < 1) {
    firstValue = displayValue;
    displayValue = "";
    operatorChosen = operator;
    // resultElement.textContent += operatorChosen;
  } else {
    console.log(firstValue, operatorChosen, displayValue);
    displayValue = "";
    displayValue += operator;
    count = 0;
  }
}
// konwersja ze stringa na number
// potem stworzenie obiektu ktory rozpoznaje operatory
// za pomoca f.arrow wykonuje dzialanie na skonwersowanych liczbach

// ========== ZAKOMENTOWANY KOD DO IMPLEMENTACJI ==========
// let firstValue = null;      // pierwsza liczba
// let operatorChosen = null;  // operator (+, -, *, /)
//
// function calc(chosen) {
//   displayValue += chosen;
//   updateDisplay();
// }
//
// function updateDisplay() {
//   const resultElement = document.getElementById("result");
//   resultElement.textContent = displayValue || "0";
// }
//
// function operation(operator) {
//   if (operator === "=") {
//     // Tutaj obliczysz wynik: firstValue operatorChosen displayValue
//     console.log(firstValue, operatorChosen, displayValue);
//   } else {
//     // Zapisz pierwszą liczbę i operator
//     firstValue = displayValue;
//     operatorChosen = operator;
//     displayValue = "";  // Wyczyść dla nowej liczby
//     updateDisplay();
//   }
// }
// ========================================================
