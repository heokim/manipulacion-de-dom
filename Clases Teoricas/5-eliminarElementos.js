// 3 formas de eliminar nodos
// elimina a un hijo directo del padre
nodoPadre.removeChild(nodoAEliminar);

// elimina el nodo
nodoAEliminar.remove();

// el nodo padre reemplaza a un hijo directo, por otro nodo
nodoPadre.replaceChild(nuevoNodo, nodoAReemplazar);