function assignMessageByPercentage(distanceNumbers){
    if(distanceNumbers > 11){
        // FAR
        showMessage(messages[0]);
        animateCSS('bigNumber', 'headShake', 'color-red','duration-2s');
    }
    else if (distanceNumbers > 5 && distanceNumbers <= 11){
        // NEAR
        showMessage(messages[1]);
        animateCSS('bigNumber', 'swing', 'color-yellow');
    }
    else{
        // VERY CLOSE
        showMessage(messages[2]);
        animateCSS('bigNumber', 'tada', 'color-green');
    }
}
function showMessage(msg){
    result.innerHTML = `<i class="fas fa-play fa-rotate-${valueRotate}"></i> 
                        ${msg} 
                        <i class="fas fa-play fa-rotate-${valueRotate}"></i>`;
}
function saveDataEndGame(){
    setTimeout(function() {
        window.location.replace("endGame.html");
    }, 2000);
}