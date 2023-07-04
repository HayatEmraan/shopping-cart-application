const container = document.querySelector(".calculate-cart");

function calculate(name, price) {
  const divContainer = document.createElement("div");
  divContainer.className = "order-item";
  const h3 = document.createElement("h3");
  h3.textContent = name;

  const input = document.createElement("input");
  input.type = "number";
  input.value = 1;
  input.setAttribute("min", "1");
  input.className = "quantity";
  input.onchange = (e) => {
    const middle = parseFloat(e.target.value);
    const middleParent = e.target.parentElement;
    const middleTotalPrice = middleParent.querySelector(".price").innerText;
    const splitMiddle = middleTotalPrice.split("$")[1];
    const totalPrice = middleParent.querySelector(".total-price");
    totalPrice.innerText = `$${(middle * parseFloat(splitMiddle)).toFixed(2)}`;
    calculateFunction();
  };

  const p = document.createElement("p");
  p.className = "price";
  p.textContent = `$${price}`;

  const tp = document.createElement("p");
  tp.className = "total-price";
  tp.textContent = `$${price}`;

  divContainer.appendChild(h3);
  divContainer.appendChild(input);
  divContainer.appendChild(p);
  divContainer.appendChild(tp);
  container.appendChild(divContainer);
  calculateFunction();
}


let totalSum = 0;
function calculateFunction() {
  totalSum = 0;
  const totalPriceData = document.querySelectorAll(".total-price");
  for (let i = 0; i < totalPriceData.length; i++) {
    totalSum += parseFloat(totalPriceData[i].innerText.split("$")[1]);
  }
  document.querySelector(".h1div").style.display = "block";
  document.getElementById("calculatePrice").innerText = `$${totalSum.toFixed(2)}`;
}


export default calculate;
