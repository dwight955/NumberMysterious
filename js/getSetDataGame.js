function getDataActuallyGame(){
    const objGame = JSON.parse(sessionStorage.getItem('stateActuallyGame'));
    return objGame;
}

function setDataGame(obj){
    const objString = JSON.stringify(obj);
    sessionStorage.setItem('stateActuallyGame',objString);
}