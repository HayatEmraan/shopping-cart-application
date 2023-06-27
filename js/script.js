import product from "./product.js";
const container = document.querySelector(".container");
function productData() {
  const div = document.createElement("div");
  div.classList.add("product");
  product.forEach((item) => {
    div.innerHTML += `
    <div class="card">
      <img src="${item.image}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <div class="separate">
       <p>$${item.price}</p>
       <button>Add to cart</button>
      </div>
    </div>
    `;
    container.appendChild(div);
  });
}

productData();
