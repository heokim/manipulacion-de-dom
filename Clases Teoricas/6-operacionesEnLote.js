// ejemplo de agregar 100 inputs al final del Body

// forma no optima, porque escribe(modifica) en el DOM 100 veces
for (let i = 0; i < 100; i++) {
  const node = document.createElement("input");
  document.body.appendChild(node); // Modificamos 100 veces
}

// forma mas optima 
const nodes = []; // creamos array node instartamos los nodos

for (let i = 0; i < 100; i++) {
  const node = document.createElement("input");
  nodes.push(nodes)
}

document.body.append(...nodes); // Modificamos 1 sola vez, agregando todos los nodos de 1 vez


// la clave es tratar de reducir la veces que modificamos(agregar, eliminar, editar) el DOM