let count = 0;
let displayValue = "";
let firstValue = "";
let operatorChosen = "";
let result;
let sequence = "";
const resultElement = document.getElementById("result");
//It's a function which get's variable from caluclator
// par cho is a number 1,2,3...
function calc(chosen) {
  displayValue += chosen;
  if (resultElement.textContent === "0000") {
    resultElement.textContent = "";
  }
  sequence = displayValue;
  resultElement.textContent = sequence;
}

// function calculate(a, op, b) {
//   const numA = parseFloat(a);
//   const numB = parseFloat(b);
//   if (isNaN(numA) || isNaN(numB)) return NaN;
//   switch (op) {
//     case "+":
//       return numA + numB;
//     case "-":
//       return numA - numB;
//     case "*":
//       return numA * numB;
//     case "/":
//       return numB !== 0 ? numA / numB : NaN;
//     default:
//       return NaN;
//   }
// }

// par op is a string with +/- etc..
function operation(operator) {
  count++;
  if (operator === "=" && count > 1) {
    console.log(firstValue, operatorChosen, displayValue);
    result = eval(firstValue, operatorChosen, displayValue);
    // result = calculate(firstValue, operatorChosen, displayValue);
    console.log(result);
    count = 0;
  } else if (count === 1) {
    firstValue = displayValue;
    operatorChosen = operator;
    sequence += operatorChosen;
    displayValue = "";
    console.log(firstValue, operatorChosen, displayValue);
    resultElement.textContent = sequence;
  } else {
  }
}
// konwersja ze stringa na number
// potem stworzenie obiektu ktory rozpoznaje operatory
// za pomoca f.arrow wykonuje dzialanie na skonwersowanych liczbach
