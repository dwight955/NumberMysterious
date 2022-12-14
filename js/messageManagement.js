
// ESCOGE EL TIPO DE MENSAJES
function chooseTypeOfMessage(percentage, isOlder){
    // DISTACIA DE LEJANIA
    let messages;

    if (isOlder) {
        messages = messagesFarDistance;
    } else {
        messages = messagesCloseDistance;
    }
    assignMessageByPercentage(percentage, messages, isOlder);
}

function assignMessageByPercentage(percentage, messages, isOlder){
    let colorIndicator = ['red', '#f9ce4d', 'green'];
    let colors = isOlder ? colorIndicator.reverse() : colorIndicator;
    if(percentage <= 45){
        showMessage(messages[0]);
        animateCSS('bigNumber', 'headShake', colors[0],'duration-2s');
    }
    else if (percentage > 45 && percentage <= 80){
        showMessage(messages[1]);
        animateCSS('bigNumber', 'headShake', colors[1]);
    }
    else{
        showMessage(messages[2]);
        animateCSS('bigNumber', 'headShake', colors[2]);
    }
}
function showMessage(msg){
    result.textContent = msg;
}
function saveDataEndGame(){
    btnGo.disabled = true;
    setTimeout(function() {
        window.location.replace("endGame.html");
    }, 2000);
}
// FUNCION PARA EL CONTROL DE LAS ANIMACIONES
const animateCSS = (element, animation, color = none, duration = "duration-1s",prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const animationDuration = `${prefix}${duration}`;
    const node = document.getElementById(element);

    node.classList.add(`${prefix}animated`, animationName, animationDuration);
    node.style.color=color;

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName, animationDuration);
      node.style.color="#F86526";
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });