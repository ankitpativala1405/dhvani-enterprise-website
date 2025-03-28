let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cartItems);

function updateCart() {
  document.getElementById("cart-body").innerHTML = "";
  let subtotal = 0;

  for (let i = 0; i < cartItems.length; i++) {
    let product = document.createElement("td");
    product.innerHTML = cartItems[i].sku;

    let price = document.createElement("td");
    price.innerHTML = `₹${cartItems[i].price}`;

    let quantity = document.createElement("td");
    let quantityValue = isNaN(cartItems[i].quantity) || cartItems[i].quantity <= 0 ? 1 : cartItems[i].quantity;
    quantity.innerHTML = `<input type="number" value="${quantityValue}" data-id="${cartItems[i].id}" class="quantity-input">`;

    let total = document.createElement("td");
    total.innerHTML = `₹${cartItems[i].price * quantityValue}`;

    let remove = document.createElement("td");
    remove.innerHTML = `<button data-id="${cartItems[i].id}" class="remove-btn">Remove</button>`;
    remove.addEventListener("click", () => {
      cartItems = cartItems.filter(item => String(item.id) !== event.target.dataset.id);
      updateCart();
    });

    let tr = document.createElement("tr");
    tr.append(product, price, quantity, total, remove);

    document.getElementById("cart-body").append(tr);

    subtotal += cartItems[i].price * quantityValue;
    
    tr.querySelector('.quantity-input').addEventListener('input', (e) => {
    let newQuantity = e.target.value;

  if (+newQuantity <= 0 || newQuantity.trim() === '') {
    e.target.value = 1;
  }

  cartItems[i].quantity = +e.target.value;  
  total.innerHTML = `₹${cartItems[i].price * cartItems[i].quantity}`;

  updateCart()
});

  }

  document.getElementById("subtotal").innerHTML = `₹${subtotal}`;
  document.getElementById("total").innerHTML = `₹${Number(subtotal) + 100}`;

  localStorage.setItem("cart", JSON.stringify(cartItems));
}

updateCart()
  
    document.getElementById('checkout-btn').addEventListener('click', () => {
        window.open('./buynow.html');
    });

  