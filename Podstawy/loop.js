//Pętle

// console.log(`Powtórzenie 1`);
// console.log(`Powtórzenie 2`);
// console.log(`Powtórzenie 3`);
// console.log(`Powtórzenie 4`);
// console.log(`Powtórzenie 5`);
// console.log(`Powtórzenie 6`);
// console.log(`Powtórzenie 7`);
// console.log(`Powtórzenie 8`);
// console.log(`Powtórzenie 9`);
// console.log(`Powtórzenie 10`);

// Dopóki warunek w pętli to prawda, kountynuje zapętlanie
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Powtórzenie nr.${rep}`);
}
const mathew = [
  'Mathew',
  'Kurdyk',
  2037 - 2005,
  'IT specialist',
  ['Michael', 'Peter', 'Steven'],
];

const type = [];

for (let i = 0; i < mathew.length; i++) {
  //Zczytanie zawartości tablicy i typów
  console.log(mathew[i], typeof mathew[i]);

  //Wypełnia typ pustej tablicy wedlug wzoru
  //type[i] = typeof mathew[i];
  type.push(typeof mathew[i]);
}
console.log(type);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue i break  ZASTOSOWANIE W PĘTLI

//continue poprzez warunek wyszczególniamy
//dane które chcemy uzyskać z tablicy pomijając nie ważne
console.log('-----ONLY STRINGS------');
for (let i = 0; i < mathew.length; i++) {
  if (typeof mathew[i] !== 'string') continue;
  console.log(mathew[i], typeof mathew[i]);
}

// break zakańcza całkowite działanie pętli
console.log('-----BREAK WITH NUMBER------');
for (let i = 0; i < mathew.length; i++) {
  if (typeof mathew[i] !== 'number') break;
  //nie wyświetla juz wszystkiego za break
  console.log(mathew[i], typeof mathew[i]);
}

console.log('-----ODCZYT OD KONCA-----');
for (let i = mathew.length - 1; i >= 0; i--) {
  console.log(mathew[i]);
}

//Pętla w pętli

// for(let ex = 1; ex<= 3; ex++){
//     console.log(`exercise number ${ex}`);
//     for (let rep = 1; rep<6; rep++){
//         console.log(`rep number ${rep}`);
//     }
// }

//Pętla while
//wartosc podajemy przed pętlą i dodajemy recznie w pętli

console.log('-----Pętla while');
let number = 1;
while (number <= 10) {
  console.log(`The number ${number}`);
  number++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`Loop is about to end...`);
  }
}
//for do pętli związanych z tablicami i wtedy gdy wiemy ile razy
//while gdy mamy nie znana ilosc powtórzeń(nie trzeba licznika)
