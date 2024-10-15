const productContainer = document.querySelector("#conteiner-products");
const form = document.querySelector("#form-items");
const loader = document.querySelector("#loader");

console.log(loader);

// async function getProducts() {
//   const res = await fetch("https://fakestoreapi.com/products");
//   const data = await res.json();
//   data.map((product) => {
//     const card = document.createElement("section");
//     card.classList.add("product-card");
//     const heading = document.createElement("h4");
//     heading.textContent = product.title;

//     const price = document.createElement("p");
//     price.textContent = `Price: ${Math.floor(product.price)} Euro`;

//     const picture = document.createElement("img");
//     picture.src = product.image;
//     picture.classList.add("card-img");

//     card.append(heading, price, picture);
//     productContainer.append(card);
//   });
// }

// getProducts();

const cleanItems = () => {
  while (productContainer.firstChild) {
    productContainer.removeChild(productContainer.firstChild);
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const amount = event.target.amount.value;
  event.target.amount.value = "";
  cleanItems();
  getProductsAmount(amount);
});

async function getProductsAmount(value) {
  loader.classList.toggle("loader-hide");
  setTimeout(async () => {
    const res = await fetch(`https://fakestoreapi.com/products?limit=${value}`);
    const data = await res.json();
    data.map((product) => {
      const card = document.createElement("section");
      card.classList.add("product-card");
      const heading = document.createElement("h4");
      heading.textContent = product.title;

      const price = document.createElement("p");
      price.textContent = `Price: ${Math.floor(product.price)} Euro`;

      const picture = document.createElement("img");
      picture.src = product.image;
      picture.classList.add("card-img");

      card.append(heading, price, picture);
      productContainer.append(card);
    });
    loader.classList.toggle("loader-hide");
  }, 1000);
}
