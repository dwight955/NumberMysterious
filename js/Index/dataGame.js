const stateActuallyGame = {
    numberMysteriousActual: 0,
    lifes: 0,
    difficulty: {
        value: 0,
        colors: ['#6CD22D','#f9ce4d','#FF0000'],
        texts: ['Easy','Medium','Hard'],
        valuePoint : 0 
    },
    rangeMin: 0,
    rangeMax: 0,
    points: 0,
}
setDataGame(stateActuallyGame);
if(!localStorage.getItem('topPoints')){
    let topPoints = [];
    setPointsLocal(topPoints);
}