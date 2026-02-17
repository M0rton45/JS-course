'use strict';
// funkcja losowania liczby z zakresu 1-6
// pobieranie na biezaco np name--${i} gdzie i to numer gracza
const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnReset = document.querySelector('.btn--new');
const styleDice = document.querySelector('.dice');
let activePlayer = 0; // bedzie zmiana z 0 na 1 i odwrotnie
// np: player--${activePlayer}
let currentScore = 0;
let score = [0, 0];
let playing = true;
// Żeby zmienne z funkcji były dostępne poza funkcją, muszą być zadeklarowane na zewnątrz funkcji

const rollDice = function () {
  if (!playing) return;
  styleDice.classList.remove('hidden');
  //  Losowanie od 1 do 6
  let rolledDice = Math.ceil(Math.random() * 6);
  //   Podmiana obrazka kości
  dice.src = `dice-${rolledDice}.png`;
  currentScore += rolledDice;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  //   Wywołanie funkcji switchPlayer
  if (rolledDice === 1) switchPlayer();
};
//  Funkcja zmiany gracza
const switchPlayer = function () {
  //   Zmiana stylów aktywnego gracza i zmiana aktywnego gracza
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  //reset bieżącego wyniku gracza
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
};
const holdScore = function () {
  if (!playing) return;
  styleDice.classList.add('hidden');
  score[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    score[activePlayer];
  if (score[activePlayer] >= 20) winner();
  switchPlayer();
};
// Funkcja resetujaca gre do stanu poczatkowego
const resetGame = function () {
  styleDice.classList.add('hidden');
  playing = true;
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  for (let i = 0; i < score.length; i++) {
    document.getElementById(`score--${i}`).textContent = 0;
    document.getElementById(`current--${i}`).textContent = 0;
    document.querySelector(`.player--${i}`).classList.remove('player--winner');
  }
};

btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdScore);
btnReset.addEventListener('click', resetGame);

const winner = function () {
  playing = false;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--winner');
};
// Dodawanie wyniku do tymczasowego wyniku aktualnego gracza podczas losowania gdy nie wyolsuje 1
