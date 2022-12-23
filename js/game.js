// Se genera el numero misterioso entre el rango 40 a 100
let inputNumber = 0;
/*INPUT NUMBER*/ 
// Cuando se empieza a escrbir en el input de texto
input.addEventListener("keyup",function(e) {
    inputNumber = input.value;
    textBigNumber.textContent= input.value;
    if(inputNumber == ''){
        textBigNumber.textContent= '?';
    }
})
// click al boton GO
btnGo.addEventListener('click', function(){
    // Obtener el valor del numero ingresado
    inputNumber = parseInt(input.value);

    if(numberMysterious == inputNumber){
        win();
    }else{
        if(countLifes != 0){
            check_distance(numberMysterious, inputNumber);
        }else{
            result.textContent = 'GAME OVER';
            btnGo.disabled = true;
        }
    }
})
