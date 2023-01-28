/*CON LOS DATOS SIGUIENTE SE CALCULA 
LA DISTANCIA LEJANA (far_distance) Y LUEGO LA CERCANA (closeDistance)*/
let numberMysterious = getRandomArbitrary(rangeMin, rangeMax);
setPropertyDataGame('numberMysteriousActual', numberMysterious);
// Se le resta -1 para tomar en cuenta el numero minimo
let closeDistance = numberMysterious - rangeMin; 
// Multiplicandolo por -1 se convierte en positivo el número;
let farDistance = Math.abs(numberMysterious - rangeMax); 

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
    // Mandar mensahe y booleano para decidir que mensaje mandar
    chooseTypeOfMessage(percentage, isOlder);
}