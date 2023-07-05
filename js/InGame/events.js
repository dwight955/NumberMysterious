// Se genera el numero misterioso entre el rango 40 a 100
let inputNumber = "";
const maxDigit = 3;
/*INPUT NUMBER*/
// Cuando se empieza a escrbir en el input de texto

/* oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" */
input.addEventListener("input", showNumberString);
function showNumberString() {
  inputNumber = input.value;
  // Impide mostrar mas de tres digitos
  if (inputNumber.length > maxDigit) {
    input.value = inputNumber.slice(0, maxDigit);
  }
  textBigNumber.textContent = inputNumber ? input.value : "?";
  // Se limpiara el mesaje del resultado
  result.innerHTML = '';
}
// click al boton GO
btnGo.addEventListener("click",evaluateInputData);
// Accionar metodo al presionar ENTER 
input.addEventListener("keyup",function(event){
  if (event.key === "Enter") {
    evaluateInputData();
  }
})
// El metodo que evalua el dato entrante
function evaluateInputData() {
  if (inputNumber.length != 0) {
    // Obtener el valor del numero ingresado
    inputNumber = parseInt(input.value);
    // GANAR
    if (inputNumber == numberMysterious) {
      playerWin();
    } else {
      subtractLife();
      if (countLifes == 0) saveDataEndGame();
    }
    // El input de entrada vuelve a tener el cursor
    input.focus();
  } else result.innerText = "Write a number";
}
function playerWin(){
  let newDifficulty = actuallyDifficulty < 2 ? actuallyDifficulty + 1 : actuallyDifficulty;
  let pointsActually = pointsAccumulator();
  showNotificationLevelUp(pointsActually);
  setTimeout(() => { assignDifficulty(newDifficulty);}, 4000);
}
function subtractLife(){
  // Verifico si esta dentro del rango establecido
  if(inputNumber >= rangeMin && inputNumber <= rangeMax ){
    // GASTA SU VIDA
    countLifes--;
    // Actualizacion de la vida
    lifeActually(countLifes);
    // verificar la distancia de cercania
    check_distance(inputNumber);
  }else result.innerText = "Out of Range";
}