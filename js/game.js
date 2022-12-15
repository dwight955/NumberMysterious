// Se genera el numero misterioso entre el rango 40 a 100
let numberMysterious = getRandomArbitrary(rangeMin, rangeMax);
let inputNumber = 0;

console.log(numberMysterious)

//La funcion se aplica cuando se empieza a escrbir en el input de texto
input.addEventListener("keyup",function(e) {
    inputNumber = input.value;
    textBigNumber.textContent= input.value;
    if(inputNumber == ''){
        textBigNumber.textContent= '?';
    }
})
// La funcion se aplica cuando se hace click al boton GO
btnGo.addEventListener('click', function(){
    // Obtener el valor del numero ingresado
    inputNumber = Number(input.value);
    validate(numberMysterious, inputNumber)
})
