/* 
    Este archivo se encarga de capurar elementos importantes del juego, como tambien
    declarar variables que sera usados en los respectivos eventos del juego.
    De igual forma se pondran metodos y funciones idependientes de algun proceso.
*/
let btnGo = document.getElementById('validate');
let result = document.getElementById('result');
let score = document.getElementById('score');
let input = document.getElementById('input_number');
let textBigNumber = document.getElementById('bigNumber');
let clue = document.getElementById('game__clue_expression');

// CONFIGURACION INICIAL PARA CADA PARTIDA DEL JUEGO
// Json que trae los datos del juego 
let intervale = JSON.parse(sessionStorage.getItem('intervale'));
// Menos 1 para que tome en cuenta el mismo numero minimo
let rangeMin = intervale.keynumberMin - 1; 
let rangeMax = intervale.keynumberMax;
let countLifes = intervale.keylifes;
// Valor individual de un punto
let point = 250;
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