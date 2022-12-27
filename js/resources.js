// Resources
// Elements
// La funcion se aplica cuando el documento HTML se ha cargado por completo
let btnGo = document.getElementById('validate');
var result = document.getElementById('result');
var score = document.getElementById('score');
var input = document.getElementById('input_number');
var textBigNumber = document.getElementById('bigNumber');
// Menos 1 para que tome en cuenta el mismo numero minimo
let rangeMin = 40 - 1; 
let rangeMax = 100;
var countLifes = 5;
var point = 250;
var totalPoints = countLifes * point;

let messagesCloseDistance = ['Aun estas lejos','Ya casi lo encuentras!',
'Solo un poco más']

let messagesFarDistance=['Estas cerca', 'Estas lejos', 'Estas muy lejos']

// Actualizar las vidas
lifeActually(countLifes);
// functions -> devuelve numero mayor o igual que minimo y menor al maximo.
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function lifeActually(lifes){
    document.getElementById('lifes').textContent='LIFES: '+ lifes;
    countLifes = lifes;
}
function messageGame(msg, bool){
    result.textContent = msg;
    btnGo.disabled = bool;
}
function resultMessageGame(percentage, messages){
    if(percentage <= 45){
        messageGame(messages[0], false);
    }
    else if (percentage > 45 && percentage <= 80){
        messageGame(messages[1], false);
    }
    else{
        messageGame(messages[2], false);
    }
}