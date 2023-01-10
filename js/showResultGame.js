let totalPoints = getDataActuallyGame().points;
let btnRetry = document.getElementById('btn_retry');

let score = document.getElementById('score').textContent = stringFormatPoints(totalPoints);

function stringFormatPoints(points){
    let pointsFormat = points.toString().padStart(7, '0');
    return pointsFormat;
}
sessionStorage.stateActuallyGame.clear();
/*btnRetry.addEventListener('click', function(){
    sessionStorage.data.clear();
})*/