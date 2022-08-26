// agregar eventos
nodo.addEventListener('tipoDeEvento', funcionAEjecutar);

// quitar eventos
nodo.removeEventListener('tipoDeEvento', funcionAEliminar);

// ejemplo practico
const input = document.querySelector('#firstName')

// evento click: al hacer click sobre el elemento
input.addEventListener('click', (e) => {
  console.log('Evento Click a sido activado!');
});

// evento input: al escribir sobre el input
input.addEventListener('input', (e) => {
  console.log('Evento Input a sido activado!');
});

// un elemento puede tener varios eventos del mismo tipo
const apellido = document.getElementById('lastName');

const accion1 = (e) => console.log("accion 1");
const accion2 = (e) => console.log("accion 2");

apellido.addEventListener('click', accion1);
apellido.addEventListener('click', accion2);
// podemos ver que se ejecutan ambas acciones

// eliminamos del evento click la funcion de accion1
apellido.removeEventListener('click', accion1);

// apartir de ahora solamente imprimir la accion2, porque la accion1 se a eliminado
// para poder eliminar un evento, es recomendable definir funciones como variables, para asi poder indentificarlo
// por lo tanto no es recomentdable usar ArrowFunction ni funciones Anonimas para un evento, 

const accion3 = e => console.log("accion 3");
apellido.addEventListener('click', accion3); // Recomendable

apellido.addEventListener('click', function accion() { console.log("accion 4") }); // NO recomendable

apellido.addEventListener('click', e => console.log('accion 5')); // NO recomendable

//===========================================================================

// los eventos se pueden propagar, por ejemplo suponga que tenemos la sig HTML
/*
  <div id="nodo1">
    <div id="nodo2">
      <h2 id="h2"></h2>
    </div>
  </div>
*/

// y acada componente agregamos el sig evento
nodo1.addEventListener('click', e => console.log(`Evento desde: ${e.currentTarget.nodeName}`));

// al dar click en cualquier componente, tambien accionara el mismo evento a todos los nodos padres,
// a eso se lo llama propagacion de eventos

// y para evitar la propagacion de puede usar la siguiente propiedad al nodo que no se quiera que propague
nodo2.addEventListener('click', e => {
  e.stopPro
  console.log(`Evento desde: ${e.currentTarget.nodeName}`)
});

// tambien existe la delegacion de evento, que trata de que si se tiene un gran numero de eventos 
// porque un tipo de elemento se repite muchas veces, entonces podesmos agregar a un elemento padre
// con contega a todos y que el maneje los eventos