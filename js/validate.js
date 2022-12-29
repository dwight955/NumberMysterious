/*CON LOS DATOS SIGUIENTE SE CALCULA 
LA DISTANCIA LEJANA (far_distance) Y LUEGO LA CERCANA (closeDistance)*/
let numberMysterious = getRandomArbitrary(rangeMin, rangeMax);
// Se le resta -1 para tomar en cuenta el numero minimo
let closeDistance = numberMysterious - rangeMin; 
// Multiplicandolo por -1 se convierte en positivo el número;
let farDistance = (numberMysterious - rangeMax) * (- 1); 

// Verificar la distancia y dar mensaje segun el resultado
function check_distance(unknownNumber, inputNumber){
    let percentage = 0;
    let indexNumber = 0;
    let isOlder = false;
    
    if(inputNumber < unknownNumber){
        indexNumber = inputNumber - rangeMin;
        percentage = Math.floor((indexNumber * 100) / closeDistance);
    }
    else{
        indexNumber = inputNumber - unknownNumber;
        percentage = Math.floor((indexNumber * 100) / farDistance);
        isOlder = true;
    }
    // Actualizacion de la vida
    lifeActually(countLifes - 1);
    // Mandar mensahe y booleano para decidir que mensaje mandar
    message_percentage(percentage, isOlder);
}

// MOSTRAR MENSAJES SEGUN EL PORCENTAJE OBTENIDO
function message_percentage(percentage, isOlder){
    // DISTACIA DE LEJANIA
    if(isOlder){
        resultMessageGame(percentage, messagesFarDistance);
    }
    // DISTANCIA DE CERCANIA
    else {
        resultMessageGame(percentage, messagesCloseDistance);
    }
}