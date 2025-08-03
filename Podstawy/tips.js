// 41 CHALLANGE #2
let tip = 0;
var value = prompt('Enter the value');
const bills = [125, 555, 44];

function calcTip() {
  if (value >= 50 && value <= 300) {
    tip = 1.2;
    for (let x = 0; x < bills.length; x++) {
      bills[x] = bills[x] * 1.2;
      console.log(bills[x]);
    }
    console.log('Fine', tip);
  } else {
    for (let x = 0; x < bills.length; x++) {
      bills[x] = bills[x] * 1.2;
    }
  }
  console.log('bad');
}

calcTip();
