function assignDifficulty(difficulty){
    let numberMin = 0; 
    let numberMax = 0;
    let lifes = 0;
    switch (difficulty) {
        case 0:
            numberMin = 10;
            numberMax = 50;
            lifes = 7;
        break;
        case 1:
            numberMin = 30;
            numberMax = 100;
            lifes = 5;
        break;
        case 2:
            numberMin = 40;
            numberMax = 150;
            lifes = 4;
        break;
        default:
          numberMin = 10;
          numberMax = 50;
          lifes = 7;
    }
    
    sessionStorage.setItem('intervale', JSON.stringify(
        {   keynumberMin: numberMin, 
            keynumberMax: numberMax,
            keylifes: lifes,
            keyActuallyDifficulty: difficulty
        }));
    window.location.replace("/pages/inGame.html"); 
}