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
var countLifes = 100;
var unit_point = 250;
var total_points = countLifes * unit_point;
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
function win(){
    result.textContent = 'WIN';
    btnGo.disabled = true;
}
// MOSTRAR MENSAJES SEGUN EL PORCENTAJE OBTENIDO
function message_percentage(percentage, is_older){
    if(is_older){
        console.log("Numero introducido es mayor");
        // Mensaje para close_distance
        // 0% a 45% Aun estas lejos
        // 46% a 80% Ya casi lo encuentras
        // 81% a 100 % Solo un poco más 
    }else{
        console.log("Numero introducido es menor");
        // Mensaje para far_distance
        // 0% a 45% Estas cerca
        // 46% a 80% Estas lejos
        // 81% a 100% Estas muy lejos
    }
}