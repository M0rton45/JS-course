// Lesson 38 #1 Challange
const calcAverage = (a, b, c) => (a + b + c) / 3;
let avgKoalas = calcAverage(23, 34, 27);
let avgDolphins = calcAverage(85, 54, 41);
console.log(avgKoalas);
console.log(avgDolphins);

function checkWinner(teamOne, teamTwo) {
  if (teamOne > teamTwo * 2) {
    console.log(`Winner is team Koalas ${teamOne} vs. ${teamTwo}`);
  } else if (teamOne < teamTwo * 2) {
    console.log(`Winner is team Dolphins ${teamOne} vs. ${teamTwo}`);
  } else {
    console.log('None win');
  }
}
checkWinner(avgKoalas, avgDolphins);

avgKoalas = calcAverage(65, 54, 41);
avgDolphins = calcAverage(44, 23, 71);
checkWinner(avgKoalas, avgDolphins);
