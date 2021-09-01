'use strict'

//Variables
const number = document.querySelector('.js-input');

const pruebaBtn = document.querySelector('.js-btn');

const clue = document.querySelector('.js-clue');

const randomNumber = getRandomNumber();

const getInput = number.value;

//Función para coger número aleatorio
function getRandomNumber(max) {
    return Math.ceil(Math.random() * 100);
   }

   console.log('Mi número aleatorio es ' + getRandomNumber())

//Función para hacer que el número escrito en el input aparezca en la consola.
 
function handleClickBtn() {
    const inputNumber = number.value;
    console.log(inputNumber);
}

pruebaBtn.addEventListener('click', handleClickBtn);

//
function compareNumber() {
    if (getInput >= randomNumber) {
        clue.innerHTML = 'Demasiado alto'
    } else if (getInput <= randomNumber) {
        clue.innerHTML = 'Pista: Demasiado bajo'
    } else if (getInput !== randomNumber){
        clue.innerHTML = 'Pista: El número debe estar entre 1 y 100'
    } else {
        clue.innerHTML = 'Pista: ¡Has ganado campeona!'
    }
}
compareNumber();