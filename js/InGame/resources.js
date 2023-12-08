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
let textDifficulty = document.getElementById('actuallyDifficulty');
let notificationLevelUp = document.getElementById('notification_levelUp');
let notificationText = document.getElementById('notification__text');
let notificationPointsActually = document.getElementById('notification__points_actually');
// CONFIGURACION INICIAL PARA CADA PARTIDA DEL JUEGO
// Menos 1 para que tome en cuenta el mismo numero minimo
// Json que trae los datos del juego 
let objGame = getDataActuallyGame();
let rangeMin = objGame.rangeMin; 
let rangeMax = objGame.rangeMax;
let countLifes = objGame.lifes;
// Valor individual de un punto
let point = objGame.difficulty.valuePoint;
let actuallyDifficulty = objGame.difficulty.value;
// Mensajes para dar pistas al jugador de lo cerca o lejos del numero misterioso
let messages = ['FAR','NEAR','VERY CLOSE'];
let colors = objGame.difficulty.colors;

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
    textDifficulty.textContent = difficulty.texts[value];
    textDifficulty.style.color = difficulty.colors[value];
}
function showClueExpression(rangeMin, rangeMax){
    clue.textContent = `${rangeMin} ≤ ? < ${rangeMax}`;
}
function pointsAccumulator(){
    let totalPointsGame = countLifes * point;
    let lastPointsActual = getDataActuallyGame().points;
    let AccumulatePointsUpdated = totalPointsGame + lastPointsActual;
    setPropertyDataGame('points',AccumulatePointsUpdated);
    return AccumulatePointsUpdated;
}
function showNotificationLevelUp(pointsActually){
    notificationLevelUp.style.visibility = 'visible';
    notificationText.innerHTML = actuallyDifficulty < 2 ? 'Congratulations<br>Next level' : 'Excellent<br>keep it up';
    notificationPointsActually.textContent = pointsActually;
    // Animaciones
    // Animacion de entrada
    animateCSS('notification_levelUp','bounceInUp','');
    // Animacion de salida
    setTimeout(()=>{ animateCSS('notification_levelUp','bounceOutDown','','',true, 'delay-2s');}, 1000)
}