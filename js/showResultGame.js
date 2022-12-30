let dataFinish = JSON.parse(sessionStorage.getItem('data'));
let btnRetry = document.getElementById('btn_retry');

let message = dataFinish.keyMsg;
let points = dataFinish.keyPoints;
let claseColor = dataFinish.keyClaseText; 

let textWinOrFalse = document.getElementById('finishText');
textWinOrFalse.textContent = message;
textWinOrFalse.classList.add(claseColor);

let score = document.getElementById('score').textContent = stringFormatPoints(points);

function stringFormatPoints(points){
    let pointsFormat = points.toString().padStart(7, '0');
    return pointsFormat;
}

btnRetry.addEventListener('click', function(){
    sessionStorage.clear();
})