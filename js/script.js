import product from "./product.js";
import calculate from "./calculate.js";
const container = document.querySelector(".container");

product.forEach((item) => {
  const card = document.createElement("div");
  card.className = "card";

  const image = document.createElement("img");
  image.src = item.image;
  image.alt = item.name;

  const name = document.createElement("h3");
  name.textContent = item.name;

  const separate = document.createElement("div");
  separate.className = "separate";

  const price = document.createElement("p");
  price.textContent = `$${item.price}`;

  const button = document.createElement("button");
  button.textContent = "Add to cart";
  button.onclick = () => calculate(`${item.name}`, `${item.price}`);

  separate.appendChild(price);
  separate.appendChild(button);

  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(separate);

  container.appendChild(card);
});
