/*CON LOS DATOS SIGUIENTE SE CALCULA 
LA DISTANCIA LEJANA (far_distance) Y LUEGO LA CERCANA (close_distance)*/
let numberMysterious = getRandomArbitrary(rangeMin, rangeMax);
// Se le resta -1 para tomar en cuenta el numero minimo
let close_distance = numberMysterious - rangeMin; 
// Multiplicandolo por -1 se convierte en positivo el número;
let far_distance = (numberMysterious - rangeMax) * (- 1); 

// Verificar la distancia y dar mensaje segun el resultado
function check_distance(unknownNumber, inputNumber){
    let percentage = 0;
    let index_input_number = 0;
    let is_older = false;
    
    if(inputNumber < unknownNumber){
        index_input_number = inputNumber - rangeMin;
        percentage = Math.floor((index_input_number * 100) / close_distance);
    }
    
    if(inputNumber > unknownNumber){
        index_input_number = inputNumber - unknownNumber;
        percentage = Math.floor((index_input_number * 100) / far_distance);
        is_older = true;
    }
    // Actualizacion de la vida
    lifeActually(countLifes - 1);
    // Mandar mensahe y booleano para decidir que mensaje mandar
    message_percentage(percentage, is_older);
}


/*function check_distance(unknownNumber, inputNumber){
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
}*/