/* 
    Este archivo se encarga de capurar elementos importantes del juego, como tambien
    declarar variables que sera usados en los respectivos eventos del juego.
    De igual forma se pondran metodos y funciones idependientes de algun proceso.
*/
let btnGo = document.getElementById('validate');
var result = document.getElementById('result');
var score = document.getElementById('score');
var input = document.getElementById('input_number');
var textBigNumber = document.getElementById('bigNumber');
var clue = document.getElementById('game__clue_expression');


let intervale = JSON.parse(sessionStorage.getItem('intervale'));
// Menos 1 para que tome en cuenta el mismo numero minimo
let rangeMin = intervale.keynumberMin - 1; 
let rangeMax = intervale.keynumberMax;
var countLifes = intervale.keylifes;
var point = 250;
// Mensajes para dar pistas al jugador de lo cerca o lejos del numero misterioso
let messagesCloseDistance = ['FAR','NEAR','VERY CLOSE']
let messagesFarDistance=['EXCEEDED', 'FAR!!', 'VERY FAR!!']
// Actualizar las vidas
lifeActually(countLifes);
showClueExpression(intervale.keynumberMin, intervale.keynumberMax);
// functions -> devuelve numero mayor o igual que minimo y menor al maximo.
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function lifeActually(lifes){
    document.getElementById('lifes').textContent='LIFES: '+ lifes;
    countLifes = lifes;
}
function showClueExpression(rangeMin, rangeMax){
    clue.textContent = `${rangeMin} ≥ ? < ${rangeMax}`;
}