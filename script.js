'use strict';

const scoreEl0 = document.getElementById('score--0');
const scoreEl1 = document.getElementById('score--1');

const currentScoreEl = document.querySelectorAll('.current-score');

const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const playerActive = document.querySelector('.player--active');
const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');
const score = document.querySelector('.score');
const playerEl = document.querySelector('.player');

let currentScore, currentPlayer, playerScores = [0, 0];

const init = function () {
    currentScoreEl[0].textContent = 0;
    currentScoreEl[1].textContent = 0;
    scoreEl0.textContent = 0;
    scoreEl1.textContent = 0;
    playerScores = [0, 0];
    currentScore = 0;
    currentPlayer = 0;

    btnHold.disabled = false;
    btnRoll.disabled = false;

    playerEl0.classList.remove('player--winner');
    playerEl1.classList.remove('player--winner');
    playerEl1.classList.remove('player--active');
    playerEl0.classList.add('player--active');
};
init();

const playerSwitch = function () {
    playerEl0.classList.toggle('player--active');
    playerEl1.classList.toggle('player--active');
    document.getElementById(`current--${currentPlayer}`).textContent = 0;
    currentPlayer = currentPlayer == 0 ? 1 : 0;
    currentScore = 0;
}

btnRoll.addEventListener('click', function () {
    let rand = Math.trunc(Math.random() * 6) + 1;
    dice.src = `img/dice-${rand}.png`;
    currentScore += rand;

    if (rand != 1) {
        document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
    } else {
        playerSwitch();
    }
});

btnHold.addEventListener('click', function () {
    playerScores[currentPlayer] += currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent = playerScores[currentPlayer];

    if (playerScores[currentPlayer] >= 100) {
        document.querySelector(`.player--${currentPlayer}`).classList.add('player--winner');
        btnHold.disabled = true;
        btnRoll.disabled = true;
    } else {
        playerSwitch();
    }
});
btnNew.addEventListener('click', init);