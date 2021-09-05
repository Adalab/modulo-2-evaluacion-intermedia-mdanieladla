'use strict'

//Variables
const getNumberInput = document.querySelector('.js-input');

const btnTest = document.querySelector('.js-btn');

const clue = document.querySelector('.js-clue');

const form = document.querySelector('.js-form');

const attempts = document.querySelector('.js-attempts');

let count = 0;

const randomNumber = getRandomNumber(100);

//Función para coger número aleatorio
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }

   console.log('Mi número aleatorio es ' + randomNumber)

//Función para hacer que el número escrito en el input aparezca en la consola.
function handleClickBtn() {
    const inputNumber = getNumberInput.value;
    console.log(inputNumber);
    compareNumber();
    //Actualizar el contador de intentos cada vez que la jugadora pruebe
    attempts.innerHTML = `Número de intentos: ${count++}`;
}

btnTest.addEventListener('click', handleClickBtn);

//Función para que no se refresque la página al pulsar el botón de prueba.
function handleSubmit(ev){
    ev.preventDefault();
}

form.addEventListener('submit', handleSubmit);

//Función para hacer más corto el código a la hora de poner en el if las pistas.
function writeClue(message) {
    clue.innerHTML = message
}

//Función para comparar el número introducido por la usuaria con el random number y que aparezca la pista correspondiente.
function compareNumber() {
const getInput = parseInt(getNumberInput.value);
    if(getInput <0 || getInput > 100) {
       writeClue('Pista: El número debe estar entre 1 y 100'); 
    } else if (getInput > randomNumber) {
        writeClue('Pista: Demasiado alto');
    } else if (getInput < randomNumber) {
        writeClue('Pista: Demasiado bajo');
    } else {
        writeClue('¡Has ganado campeona!');
    }
}




