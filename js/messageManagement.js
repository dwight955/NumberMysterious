
// ESCOGE EL TIPO DE MENSAJES
function chooseTypeOfMessage(percentage, isOlder){
    // DISTACIA DE LEJANIA
    let messages;

    if (isOlder) {
        messages = messagesFarDistance;
    } else {
        messages = messagesCloseDistance;
    }
    assignMessageByPercentage(percentage, messages);
}

function assignMessageByPercentage(percentage, messages){
    if(percentage <= 45){
        showMessage(messages[0], false);
    }
    else if (percentage > 45 && percentage <= 80){
        showMessage(messages[1], false);
    }
    else{
        showMessage(messages[2], false);
    }
}
function showMessage(msg, bool){
    result.textContent = msg;
    btnGo.disabled = bool;
    // Cuando el boton se desactiva, se guarda los datos del fin del juego
    saveDataEndGame(bool, msg);
}
function saveDataEndGame(bool, msg){
    if(bool){
        let claseText = msg == 'WIN' ? 'text-win' : 'text-lose';
        let totalPoints = countLifes * point;
        setTimeout(function() {
            sessionStorage.setItem('data', JSON.stringify(
                {   keyMsg: msg, 
                    keyPoints: totalPoints, 
                    keyClaseText: claseText
                }));
            window.location.replace("endGame.html");
        }, 2000);
    }
}