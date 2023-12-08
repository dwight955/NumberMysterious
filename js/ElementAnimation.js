// FUNCION PARA EL CONTROL DE LAS ANIMACIONES
const animateCSS = (element, animation, NewColor = none, duration = "fast", isEndAnimation = false, delay = "delay-0s",prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const animationDuration = `${prefix}${duration}`;
    const animationDelay = `${prefix}${delay}`;
    const node = document.getElementById(element);
    //const nodeColorOriginal = node.style.color !== '' ? node.style.color : null;

    node.classList.add(`${prefix}animated`, animationName, animationDuration, animationDelay, NewColor);
    //node.style.color = NewColor;

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName, animationDuration, animationDelay, NewColor);
      if(isEndAnimation) notificationLevelUp.style.visibility = 'hidden';
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });