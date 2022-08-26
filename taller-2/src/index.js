
import { registerImage } from './lazy'

// parametros de Maximo y Minimo
const MAX = 123;
const MIN = 1;

// funcion para obtener un numero del intervalo [MIN ; MAX]
const random = () => Math.floor(Math.random() * MAX) + MIN;

// div donde van todas la imagenes
const mountNode = document.querySelector('#images');


// funcion que retorna un elemento de Imagen
const createImageNode = () => {
  const contenedor = document.createElement('div');
  contenedor.className = "p-4";

  const imagen = document.createElement('img');

  imagen.className = "mx-auto";
  imagen.alt = "random fox image";
  imagen.width = "320";
  //imagen.src = `https://randomfox.ca/images/${random()}.jpg`;
  imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

  contenedor.appendChild(imagen);

  return contenedor;
}

// funcion para agregar imagen al div de imagenes
function addImage() {
  const elementoImagen = createImageNode();
  mountNode.appendChild(elementoImagen);
  registerImage(elementoImagen);
}

const btnAgregar = document.querySelector('#btn-agregar');

btnAgregar.addEventListener('click', addImage);

