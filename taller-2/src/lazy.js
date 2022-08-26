// 
const isIntersecting = (entry) => {
  return entry.isIntersecting;
}
const accion = (entry) => {
  const container = entry.target;
  const imagen = container.firstChild;
  const imgUrl = imagen.dataset.src;
  imagen.src = imgUrl;

  // console.log('accion: ' + imagen.nodeName);
  // console.log('url: ' + imgUrl);

  // desregistra la imagen (unlisten)
  observer.unobserve(container);
}

const observer = new IntersectionObserver((entries) => {
  entries
    .filter(isIntersecting)
    .forEach(accion);
})

export const registerImage = (imagen) => {
  observer.observe(imagen);
}