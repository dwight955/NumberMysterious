
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
    let colorIndicator = getDataActuallyGame().difficulty.colors;
    let colors = isOlder ? colorIndicator: colorIndicator.reverse();
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
    setTimeout(function() {
        window.location.replace("endGame.html");
    }, 2000);
}