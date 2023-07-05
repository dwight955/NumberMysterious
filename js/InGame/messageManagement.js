function assignMessageByPercentage(distanceNumbers){
    let colors = getDataActuallyGame().difficulty.colors;
    if(distanceNumbers > 11){
        // FAR
        showMessage(messages[0]);
        animateCSS('bigNumber', 'headShake', colors[2],'duration-2s');
    }
    else if (distanceNumbers > 5 && distanceNumbers <= 11){
        // NEAR
        showMessage(messages[1]);
        animateCSS('bigNumber', 'headShake', colors[1]);
    }
    else{
        // VERY CLOSE
        showMessage(messages[2]);
        animateCSS('bigNumber', 'headShake', colors[0]);
    }
}
function showMessage(msg){
    result.textContent = msg + " " + guideSymbol;
}
function saveDataEndGame(){
    setTimeout(function() {
        window.location.replace("endGame.html");
    }, 2000);
}