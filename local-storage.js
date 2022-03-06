// 9. 10.
const productNameField = document.getElementById("product-name");
const priceField = document.getElementById("price");
const addButton = document.getElementById("add-button");
const ul = document.getElementById("product-list");

const displayFromLocalStorageCart = () => {
  const cart = getCart();
  for (const productName in cart) {
    displayProducts(productName, cart[productName]);
  }
};

const addItem = () => {
  const productName = productNameField.value;
  const price = priceField.value;
  if (!productName || !price) {
    return;
  }

  // display in the ui
  displayProducts(productName, price);

  // add to local storage
  addProductToCart(productName, price);
  // clear
  productNameField.value = "";
  priceField.value = "";
};

const addToLocatStorage = () => {};

const displayProducts = (productName, price) => {
  const li = document.createElement("li");
  li.innerHTML = `
      <li>
        Product : <span>${productName}</span> Price: <span>${price}</span>
      </li>
    `;
  ul.appendChild(li);
};

const getCart = () => {
  const cart = localStorage.getItem("cart");
  let cartObj;
  if (cart) {
    cartObj = JSON.parse(cart);
  } else {
    cartObj = {};
  }
  // console.log(cartObj);
  return cartObj;
};

const addProductToCart = (productName, price) => {
  const cart = getCart();
  if (cart[productName]) {
    cart[productName] =
      Number.parseInt(cart[productName]) + Number.parseInt(price);
  } else {
    cart[productName] = price;
  }
  // console.log(cart);
  const cartSrtingified = JSON.stringify(cart);
  localStorage.setItem("cart", cartSrtingified);
};

const placeOrder = () => {
  ul.textContent = "";
  localStorage.removeItem("cart");
};

displayFromLocalStorageCart();
