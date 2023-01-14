// Se genera el numero misterioso entre el rango 40 a 100
let inputNumber = 0;
let maxDigit = 3;
/*INPUT NUMBER*/ 
// Cuando se empieza a escrbir en el input de texto

/* oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" */
input.addEventListener('input', showNumberString);
function showNumberString(){
    inputNumber = input.value;
    if(inputNumber.length > maxDigit){
        input.value = inputNumber.slice(0, maxDigit);
    }
    textBigNumber.textContent = inputNumber ? input.value : '?';
}
// click al boton GO
btnGo.addEventListener('click', function(){
    if(input.value.length != 0){
        // Obtener el valor del numero ingresado
        inputNumber = parseInt(input.value);
        if(countLifes != 0){
            if(numberMysterious == inputNumber){
                let actuallyDifficulty = getDataActuallyGame().difficulty.value;
                let newDifficulty = actuallyDifficulty < 2 ? actuallyDifficulty + 1 : actuallyDifficulty;
                pointsAccumulator();
                assignDifficulty(newDifficulty);
            } else {
                // Actualizacion de la vida
                lifeActually(countLifes - 1); 
                // verificar la distancia de cercania
                check_distance(numberMysterious, inputNumber);
            } 
        }else{saveDataEndGame();}
    } else{result.innerText = "Write a number"}
})