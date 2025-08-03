// 39, 40 Arrays - tablice
// Dwa sposoby na tworzenie tablic
const friends = ['Kacper', 'Dawid', 'Natan'];
const years = new Array(1945, 2045, 2024, 1999);
console.log(friends);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);
console.log(years[0]);
console.log(years[2]);

console.log(friends[friends.length - 1]);

const calcAge = (brithYear) => 2024 - brithYear;

for (let x = 0; x < years.length; x++) {
  years[x] = calcAge(years[x]);
}
console.log(years);

//Dodawanie do tablicy

// Dodawanie elementów do tablicy
const length = friends.push('Jay');
console.log(length);
// Przypisujac push pod wartość pokazuję,
// nam ilość elementów
console.log(friends);
// Dodawanie pierwszego elementu tablicy
friends.unshift('Jhon');
console.log(friends);

//Usuwanie z tablicy

//Usuwa ostatni element przeciwieństwo push
friends.pop();
console.log(friends);

//Usuwa pierwszy element z tablicy
friends.shift();
console.log(friends);

console.log(friends.indexOf('Kacper'));
// Wskazuje wartość dla jakiej,
// wartości posiada taki układ znaków
console.log(friends.indexOf('Bob'));
// Wtedy zwraca wartość -1
// Gdy damy .include zwraca wartości false or true
