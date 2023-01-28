function getDataActuallyGame(){
    const objGame = JSON.parse(sessionStorage.getItem('stateActuallyGame'));
    return objGame;
}

function setDataGame(obj){
    const objString = JSON.stringify(obj);
    sessionStorage.setItem('stateActuallyGame',objString);
}

function setPointsLocal(topPointsActually){
    let myArrayString = JSON.stringify(topPointsActually);
    localStorage.setItem('topPoints', myArrayString); 
}
function getPointsLocal(){
    let topPointsString = localStorage.getItem("topPoints");
    let arrayTopPoints = JSON.parse(topPointsString);
    return arrayTopPoints;
}

function setPropertyDataGame(property, data){
    let DataGameActual = getDataActuallyGame();
    DataGameActual[property] = data;
    setDataGame(DataGameActual);
}