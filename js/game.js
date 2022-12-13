// La funcion se aplica cuando el documento HTML se ha cargado por completo
document.addEventListener('DOMContentLoaded', function() {
    let rangeMin = 40;
    let rangeMax = 100;
    var lifes = 3;
    // Se genera el numero misterioso entre el rango 40 a 100
    let numberMysterious = getRandomArbitrary(rangeMin, rangeMax);
    // Captura de los elementos a usar
    let btnGo = document.getElementById('validate');
    let result = document.getElementById('result');
    let score = document.getElementById('score');
    let life = document.getElementById('lifes');

    let textLife = document.createTextNode(' '+ lifes)
    life.appendChild(textLife)
    // La funcion se aplica cuando se hace click al boton GO
    btnGo.addEventListener('click', function(){
        let inputNumber = document.getElementById('input_number').value;
        
    })
});

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}