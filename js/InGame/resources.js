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
let element = document.getElementById('actuallyDifficulty');
// CONFIGURACION INICIAL PARA CADA PARTIDA DEL JUEGO
// Json que trae los datos del juego 
let objGame = getDataActuallyGame();
// Menos 1 para que tome en cuenta el mismo numero minimo
let rangeMin = objGame.rangeMin - 1; 
let rangeMax = objGame.rangeMax;
let countLifes = objGame.lifes;
// Valor individual de un punto
let point = objGame.difficulty.valuePoint;
// Mensajes para dar pistas al jugador de lo cerca o lejos del numero misterioso
let messagesCloseDistance = ['FAR','NEAR','VERY CLOSE']
let messagesFarDistance=['EXCEEDED', 'FAR!!', 'VERY FAR!!']

// Actualizar las vidas
lifeActually(countLifes);
updateDifficulty();
showClueExpression(objGame.rangeMin, objGame.rangeMax);

// functions -> devuelve numero mayor o igual que minimo y menor al maximo.
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function lifeActually(lifes){
    document.getElementById('lifes').textContent = lifes > 0 ? 'LIFES: ' + lifes : 'LIFES: 0';
    countLifes = lifes;
}
function updateDifficulty(){
    let difficulty = getDataActuallyGame().difficulty;
    let value = difficulty.value;
    element.textContent = difficulty.texts[value];
    element.style.color = difficulty.colors[value];
}
function showClueExpression(rangeMin, rangeMax){
    clue.textContent = `${rangeMin} ≥ ? < ${rangeMax}`;
}
function pointsAccumulator(){
    let totalPoints = countLifes * point;
    let objGame = getDataActuallyGame();
    objGame.points += totalPoints
    setDataGame(objGame);
}