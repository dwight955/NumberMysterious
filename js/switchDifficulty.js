// Seleccionamos todos los elementos con la clase .boton
const botones = document.querySelectorAll('.modal-content .menu__btn');

// Asignamos un evento de escucha a cada uno de los elementos
botones.forEach(boton => {
  boton.addEventListener('click', () => {

    let difficulty = boton.textContent;
    let rangeMin = 0;
    let rangeMax = 0;
    switch (difficulty) {
        case 'Easy':
            rangeMin = 10;
            rangeMax = 50;
        break;
        case 'Medium':
            rangeMin = 30;
            rangeMax = 100;
        break;
        case 'Hard':
            rangeMin = 40;
            rangeMax = 150;
        break;
    }
    sessionStorage.setItem('intervale', JSON.stringify(
        {   keyRangeMin: rangeMin, 
            keyRangeMax: rangeMax
        }));
    window.location.replace("/pages/inGame.html"); 
  });
});
