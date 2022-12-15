// Almacena la distancia entre el numero minimo y el maximo
let distance = rangeMax - rangeMin; 

function validate(unknownNumber, inputNumber){
    if(unknownNumber > inputNumber){
        result.textContent = 'Huy! Estas cerca';
        lifeActually(countLifes - 1);
    }else if(unknownNumber < inputNumber){
        result.textContent = 'Huy! Te has pasado';
        lifeActually(countLifes - 1);
    }else{
        result.textContent= '¡Hurra! lo conseguiste, el numero misterioso es...'+ unknownNumber;
    }

    if(countLifes == 0){
        result.textContent = 'GAME OVER';
        btnGo.disabled = true;
    }
}