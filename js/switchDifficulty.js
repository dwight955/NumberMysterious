function assignDifficulty(difficulty){
    let numberMin = 0; 
    let numberMax = 0;
    let lifes = 0;
    let valuePoint = 0;
    switch (difficulty) {
        case 0:
            numberMin = 10;
            numberMax = 50;
            lifes = 7;
            valuePoint = 250;
        break;
        case 1:
            numberMin = 30;
            numberMax = 100;
            lifes = 5;
            valuePoint = 300;
        break;
        case 2:
            numberMin = 40;
            numberMax = 150;
            lifes = 4;
            valuePoint = 350;
        break;
        default:
          numberMin = 10;
          numberMax = 50;
          lifes = 7;
          valuePoint = 250;
    }
    
    const objGame = getDataActuallyGame();
    
    objGame.rangeMin = numberMin;
    objGame.rangeMax = numberMax;
    objGame.lifes = lifes;
    objGame.difficulty.value = difficulty;
    objGame.difficulty.valuePoint = valuePoint;

    setDataGame(objGame);
    window.location.replace("/pages/inGame.html"); 
}