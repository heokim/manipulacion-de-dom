// todo este codigo lo probamos sobre la pagina de https://getbootstrap.com/docs/4.3/examples/checkout/ un template de bootstrap

// metodo ya anticuado
document.getElementById('idDelElementoHtml');


// metodo mas moderno
/*
Este acepta todo los selectores de CSS

Existen los siguientes tipos de selectores:

#id                 Selector por ID

.clase              Selector por nombre de Clase

:estado             Selector por estado

[]atriburos         Selector por atriburos: ejemplo, 
x                   traer div con clase="btn btn-primary" 
x                   div[class="btn btn-primary"]

* todos             Selector de todos los elementos

*/

// elemento con id = "firstName"  
document.querySelector('#firstName');

// elemento con clase = "btn btn-primary"
document.querySelector('.btn.btn-primary');

// elemento con los siguientes atributos: class="custom-control-label" y for="same-address"
document.querySelectorAll('[class="custom-control-label"][for="same-address"]');

// todo lo anterior trae solo el primer elemento que conicida con lo requerido, para traer todos los componentes que coincidan solamente se usa
document.querySelectorAll('los selectores que se usaron anteriormente');

// Obs.: la funcion querySelector(); retorna un NodeList y no un Array
// NodeList no tiene varios de los mentodos que tiene un Array normal de JavaScript
// un truco para pasar de NodeList a un Array es el siguiente codigo
let listaNodo = document.querySelectorAll('.form-control');
const listaArray = [...listaNodo];
// usamos la operacion de "Spread" de ES+
