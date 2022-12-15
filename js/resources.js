// Resources
// Elements
// La funcion se aplica cuando el documento HTML se ha cargado por completo
let btnGo = document.getElementById('validate');
var result = document.getElementById('result');
var score = document.getElementById('score');
var input = document.getElementById('input_number');
var textBigNumber = document.getElementById('bigNumber');

let rangeMin = 40;
let rangeMax = 100;
var countLifes = 3;

// Actualizar las vidas
lifeActually(countLifes);
// functions
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function lifeActually(lifes){
    document.getElementById('lifes').textContent='LIFES: '+ lifes;
    countLifes = lifes;
}
