const urlApi = "https://platzi-avo.vercel.app/api/avo";
const appUrl = 'https://platzi-avo.vercel.app';

const appNode = document.querySelector('#app');

//web api
async function fetchData() {
  const response = await fetch(urlApi),
    data = await response.json(),
    allItems = [];

  data.data.forEach((item) => {
    // create image
    const image = document.createElement("img");
    image.src = appUrl + item.image;

    // create title
    const title = document.createElement("h2");
    title.textContent = item.name;

    // create price
    const price = document.createElement("div");
    price.textContent = `\$${item.price}`;

    const container = document.createElement("div");
    container.append(image, title, price);

    allItems.push(container);
  });

  document.body.append(...allItems)
}

fetchData();
