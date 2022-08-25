const urlApi = "https://platzi-avo.vercel.app/api/avo";
const appUrl = 'https://platzi-avo.vercel.app';

const appNode = document.querySelector('#app');

const formatPrice = price => {
  const newPrice = new window.Intl.NumberFormat('en-EN', {
    style: "currency",
    currency: "USD"
  }).format(price);

  return newPrice;
}

//web api
async function fetchData() {
  const response = await fetch(urlApi),
    data = await response.json(),
    allItems = [];

  data.data.forEach((item) => {
    // create image
    const image = document.createElement("img");
    image.className = "h-48 w-full object-cover md:h-full md:w-48";
    image.src = appUrl + item.image;

    // create title
    const title = document.createElement("h2");
    title.textContent = item.name;
    // title.style="frot-size: 19px";  // es lo mismo que abajo
    // title.style.fontSize = "3rem"; // este anda mejor
    title.className = "muy-grande"

    // create price
    const price = document.createElement("div");
    price.textContent = formatPrice(item.price);

    const container = document.createElement("div");
    container.className = "max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl";

    // crear contenedor aux
    const contenedorAux = document.createElement('div');
    contenedorAux.className = "p-8"


    container.append(image, title, price);

    allItems.push(container);
  });

  appNode.append(...allItems)
}

fetchData();
