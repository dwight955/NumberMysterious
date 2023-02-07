// Seleccionamos todos los botones del modal content
const buttons = document.querySelectorAll('.modal-content .menu__btn');
const btnStart = document.getElementById('start');
// Asignamos un evento de escucha a cada uno de los elementos
buttons.forEach(boton => {
    boton.addEventListener('click', (e)=>{
        
      let difficulty = parseInt(e.target.dataset.id);
      assignDifficulty(difficulty);
    });
  });

btnStart.addEventListener('mouseenter', function(){
  btnStart.classList.remove('animate__pulse');
  btnStart.classList.add('btn_shadow');
}) 
btnStart.addEventListener('mouseleave', function(){
  btnStart.classList.add('animate__pulse');
})