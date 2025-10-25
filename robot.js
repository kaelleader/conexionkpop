// Agregar animación de baile al robot
const robot = document.querySelector('.robot');
const brazoIzquierdo = document.querySelector('.brazo-izquierdo');
const brazoDerecho = document.querySelector('.brazo-derecho');
const piernaIzquierda = document.querySelector('.pierna-izquierda');
const piernaDerecha = document.querySelector('.pierna-derecha');

let paso = 0;

setInterval(() => {
  switch (paso) {
    case 0:
      // Paso 1: Levantar brazo izquierdo
      brazoIzquierdo.style.transform = 'rotate(45deg)';
      brazoDerecho.style.transform = 'rotate(0deg)';
      piernaIzquierda.style.transform = 'translateX(0px)';
      piernaDerecha.style.transform = 'translateX(0px)';
      paso = 1;
      break;
    case 1:
      // Paso 2: Levantar brazo derecho
      brazoIzquierdo.style.transform = 'rotate(0deg)';
      brazoDerecho.style.transform = 'rotate(45deg)';
      piernaIzquierda.style.transform = 'translateX(5px)';
      piernaDerecha.style.transform = 'translateX(-5px)';
      paso = 2;
      break;
    case 2:
      // Paso 3: Mover piernas
      brazoIzquierdo.style.transform = 'rotate(0deg)';
      brazoDerecho.style.transform = 'rotate(0deg)';
      piernaIzquierda.style.transform = 'translateX(10px)';
      piernaDerecha.style.transform = 'translateX(-10px)';
      paso = 3;
      break;
    case 3:
      // Paso 4: Volver a la posición inicial
      brazoIzquierdo.style.transform = 'rotate(0deg)';
      brazoDerecho.style.transform = 'rotate(0deg)';
      piernaIzquierda.style.transform = 'translateX(0px)';
      piernaDerecha.style.transform = 'translateX(0px)';
      paso = 0;
      break;
  }
}, 500);