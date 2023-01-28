let objGame = getDataActuallyGame();
let totalPoints = objGame.points;
let numberMysterious = objGame.numberMysteriousActual;
let btnRetry = document.getElementById('btn_retry');

savePointsNeatly(totalPoints);
let score = document.getElementById('score');
score.textContent = totalPoints != 0 ? `${stringFormatPoints(totalPoints)}` : `${addClassNoPoints()}`;
// Mostrar el numero misterioso
document.getElementById('numberMysteriousActual').textContent = numberMysterious;

function stringFormatPoints(points){
    let pointsFormat = points.toString().padStart(7, '0');
    return pointsFormat;
}
function addClassNoPoints(){
    score.classList.add('warning');
    return 'No points';
}
btnRetry.addEventListener('click', ()=>{
    sessionStorage.removeItem('stateActuallyGame');
    window.location.replace("/pages/inGame.html");
});