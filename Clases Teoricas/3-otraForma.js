const nodo = document.querySelector('h2')

// otra forma de leer, retorna el componente en forma de txt
node.outerHTML

// otra forma de escribir, retorna valor actual que esta dentro del elemento, ese es modificable e impacta en el HTML
node.innerHTML
node.innerHTML = 'Nuevo texto en el elemento h2';

// Obs.: innerHTML puede sufrir de injecion asi que tener cuidado

