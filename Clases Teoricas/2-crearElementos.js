// 2 tipos de creacion: 1. elemento,  2. texto
// Obs.: esos al crearse solo estan en memoria, no estan agregados al DOM todavia

// crear un elemento
document.createElement("div");
document.createElement("h1");
document.createElement("p");

// crear un texto
document.createTextNode("hola mundo!");


// formas de agregar nodos
const nodo = document.querySelector('div');
// agregar un elemento al nodo
nodo.append();                                              // agrega, metodo mas reciente
nodo.appendChild();                                         // agrega al final, metodo antiguo
nodoPadre.insertBefore(nodoAgregar, nodoReferencia);             // agregar antes del nodo referencia
nodoPadre.insertAfter(nodoAgregar, nodoReferencia);                   // agregar al final
nodoReferencia .insertAdjacentElement('4_opciones', nodo);         // 
// opciones: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'

// ejemplo de clase 6: Agregar y Crear
const container = document.querySelector('div.py-5.text-center');
const h3 = document.createElement("h3");
container.appendChild(h3);
const texto = document.createTextNode("Hola soy un nodo de Texto");
h3.appendChild(texto);

container.append('Hola Mundo!', document.createElement('div'));

