'use strict'

//Variables
const number = document.querySelector('.js-input');

const pruebaBtn = document.querySelector('.js-btn');

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