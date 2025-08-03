'use strict';
//Wykrywa błędy których JS nie wykryje
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
let i = 0;
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
for (i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
  // totals.push(bills[i]+calcTip(bills[i]));
  // tips.push(calcTip(bills[i]));
}
console.log(bills, tips, totals);

// za pomoca arr w funkcji okreslamy tablice w ktorej chcemy obliczyc srednia
const avg = function (arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  sum /= arr.length;
  console.log(sum);
};
avg(bills);
avg(tips);
avg(totals);

function name(params) {}

/* Write your code below. Good luck! 🙂 */
