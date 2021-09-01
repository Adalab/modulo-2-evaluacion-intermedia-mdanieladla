'use strict'

//Variables
const number = document.querySelector('.js-input');

const prueba = document.querySelector('.js-btn');

//Función para coger número aleatorio
function getRandomNumber(max) {
    return Math.ceil(Math.random() * 100);
   }

   console.log('Mi número aleatorio es ' + getRandomNumber())


