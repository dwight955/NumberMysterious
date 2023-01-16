let totalPoints = getDataActuallyGame().points;
let btnRetry = document.getElementById('btn_retry');

savePointsNeatly(totalPoints);
let score = document.getElementById('score').innerHTML = totalPoints!=0 ? `<h3>${stringFormatPoints(totalPoints)}</h3>` : '<h3 class="warning">No Points</h3>';

function stringFormatPoints(points){
    let pointsFormat = points.toString().padStart(7, '0');
    return pointsFormat;
}
btnRetry.addEventListener('click', ()=>{
    sessionStorage.removeItem('stateActuallyGame');
    window.location.replace("/pages/inGame.html");
});