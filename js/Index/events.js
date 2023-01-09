// Seleccionamos todos los elementos con la clase .boton
const buttons = document.querySelectorAll('.modal-content .menu__btn');

// Asignamos un evento de escucha a cada uno de los elementos
buttons.forEach(boton => {
    boton.addEventListener('click', (e)=>{
        
      let difficulty = parseInt(e.target.dataset.id);
      assignDifficulty(difficulty);
    });
  });
