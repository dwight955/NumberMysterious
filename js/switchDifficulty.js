// Seleccionamos todos los elementos con la clase .boton
const botones = document.querySelectorAll('.modal-content .menu__btn');

// Asignamos un evento de escucha a cada uno de los elementos
botones.forEach(boton => {
  boton.addEventListener('click', () => {

    let difficulty = boton.textContent;
    let numberMin = 0;
    let numberMax = 0;
    let lifes = 0
    switch (difficulty) {
        case 'Easy':
            numberMin = 10;
            numberMax = 50;
            lifes = 7;
        break;
        case 'Medium':
            numberMin = 30;
            numberMax = 100;
            lifes = 5;
        break;
        case 'Hard':
            numberMin = 40;
            numberMax = 150;
            lifes = 4;
        break;
    }
    
    sessionStorage.setItem('intervale', JSON.stringify(
        {   keynumberMin: numberMin, 
            keynumberMax: numberMax,
            keylifes: lifes
        }));
    window.location.replace("/pages/inGame.html"); 
  });
});
