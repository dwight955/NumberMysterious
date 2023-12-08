/*CON LOS DATOS SIGUIENTE SE CALCULA 
LA DISTANCIA LEJANA (far_distance) Y LUEGO LA CERCANA (closeDistance)*/
let numberMysterious = getRandomArbitrary(rangeMin, rangeMax);
setPropertyDataGame('numberMysteriousActual', numberMysterious);
// Aloja simbolo guia
let valueRotate = "";
let valueUpTriangle = '270';
let valueDownTriangle = '90';
// Verificar la distancia y dar mensaje segun el resultado
function check_distance(inputNumber){
    let distanceNumbers = Math.abs(numberMysterious - inputNumber) - 1; 
    valueRotate = numberMysterious > inputNumber ? valueUpTriangle:valueDownTriangle; 
    // Mandar mensahe y booleano para decidir que mensaje mandar
    assignMessageByPercentage(distanceNumbers);
}