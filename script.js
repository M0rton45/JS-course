'use strict';

// funkcja losowania liczby z zakresu 1-6
// pobieranie na biezaco np name--${i} gdzie i to numer gracza

const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
let activePlayer = 0; // bedzie zmiana z 0 na 1 i odwrotnie
// np: player--${activePlayer}
let currentScore = 0;

const rollDice = function () {
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

btnRoll.addEventListener('click', rollDice);
// Dodawanie wyniku do tymczasowego wyniku aktualnego gracza podczas losowania gdy nie wyolsuje 1
