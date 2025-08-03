// let tip = 0;
// const value = [];
// for (x=0; x<3; x++){
//     var test = prompt("Enter the value of number: ".x);
//     console.log(x);
//     value.push(test*1);
//     console.log(value);
//     if (value[x]>=50 && value[x]<=300){
//         tip = 1.15;
//         value[x]=value[x]*1.15;
//         console.log(value[x]);
//     }   else{
//         tip = 1.20;
//         value[x]=value[x]*1.20;
//         console.log(value[x]);
//     }
// }
// console.log(value);

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 1.15 : bill * 1.2;
};

const bills = [125, 555, 44];
const tips = [];

for (let x = 0; x < bills.length; x++) {
  tips.push(calcTip(bills[x]));
  console.log(tips);
}
