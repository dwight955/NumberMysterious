// Se genera el numero misterioso entre el rango 40 a 100
let inputNumber = 0;
/*INPUT NUMBER*/ 
// Cuando se empieza a escrbir en el input de texto
input.addEventListener("keyup", () => {
    inputNumber = input.value;
    textBigNumber.textContent= inputNumber ? inputNumber : '?';
});
// click al boton GO
btnGo.addEventListener('click', function(){
    // Obtener el valor del numero ingresado
    inputNumber = parseInt(input.value);

    if(numberMysterious == inputNumber){
        messageGame('WIN', true);
    } else {
        // Actualizacion de la vida
        lifeActually(countLifes - 1); 
        
        if (countLifes == 0){
            messageGame('Game Over', true);
        }
        // verificar la distancia de cercania
        check_distance(numberMysterious, inputNumber);
    } 
}) 
