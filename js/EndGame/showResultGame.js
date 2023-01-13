let totalPoints = getDataActuallyGame().points;
let btnRetry = document.getElementById('btn_retry');

savePointsNeatly(totalPoints);
let score = document.getElementById('score').textContent = stringFormatPoints(totalPoints);

function stringFormatPoints(points){
    let pointsFormat = points.toString().padStart(7, '0');
    return pointsFormat;
}
btnRetry.addEventListener('click', ()=>{
    sessionStorage.removeItem('stateActuallyGame');
    window.location.replace("/pages/inGame.html");
});