'use strict'

//Variables
const number = document.querySelector('.js-input');

const pruebaBtn = document.querySelector('.js-btn');

const clue = document.querySelector('.js-clue');

const randomNumber = getRandomNumber();

const intentos = document.querySelector('.js-intentos');

//Función para coger número aleatorio
function getRandomNumber(max) {
    return Math.ceil(Math.random() * 100);
   }

   console.log('Mi número aleatorio es ' + randomNumber)

//Función para hacer que el número escrito en el input aparezca en la consola.
function handleClickBtn() {
    const inputNumber = number.value;
    console.log(inputNumber);
    compareNumber()
}

pruebaBtn.addEventListener('click', handleClickBtn);

//Función para comparar el número introducido por la usuaria con el random number y que aparezca la pista correspondiente.
function compareNumber() {
const getInput = parseInt(number.value);
    if(getInput <0 || getInput > 100) {
       clue.innerHTML = 'Pista: El número debe estar entre 1 y 100' 
    } else if (getInput > randomNumber) {
        clue.innerHTML = 'Pista: Demasiado alto'
    } else if (getInput < randomNumber) {
        clue.innerHTML = 'Pista: Demasiado bajo'
    } else {
        clue.innerHTML = 'Pista: ¡Has ganado campeona!'
    }
}


//Actualizar el contador de intentos cada vez que la jugadora pruebe



