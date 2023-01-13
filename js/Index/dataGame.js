const stateActuallyGame = {
    lifes: 0,
    difficulty: {
        value: 0,
        colors: ['green','yellow','red'],
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