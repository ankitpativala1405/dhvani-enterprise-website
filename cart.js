
let cartItems=JSON.parse(localStorage.getItem("productDetails"))

function updateCart() {
    const cartTableBody = document.querySelector('#cart-table tbody');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');

    cartTableBody.innerHTML = ""; 
    let subtotal = 0;

    cartItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.sku}</td>
            <td>₹${item.price.toFixed(2)}</td>
            <td><input type="number" value="${item.quantity}" min="1" data-id="${item.id}" class="quantity-input"></td>
            <td>₹${(item.price * item.quantity).toFixed(2)}</td>
            <td><button data-id="${item.id}" class="remove-btn">Remove</button></td>
        `;
        cartTableBody.appendChild(row);
        subtotal += item.price * item.quantity;
    });

    const shipping = 100.00;
    const total = subtotal + shipping;
    subtotalElement.textContent = `₹${subtotal.toFixed(2)}`;
    totalElement.textContent = `₹${total.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', () => {
    updateCart();


    document.querySelector('#cart-table').addEventListener('input', (event) => {
        if (event.target.classList.contains('quantity-input')) {
            const itemId = parseInt(event.target.dataset.id);
            const newQuantity = parseInt(event.target.value);

            const item = cartItems.find(item => item.id === itemId);
            if (item) {
                item.quantity = newQuantity;
                updateCart();
            }
        }
    });

    // Handle remove item
    document.querySelector('#cart-table').addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-btn')) {
            const itemId = parseInt(event.target.dataset.id);
            const index = cartItems.findIndex(item => item.id === itemId);
            if (index !== -1) {
                cartItems.splice(index, 1);
                updateCart();
            }
        }
    });

    // Handle checkout
    document.getElementById('checkout-btn').addEventListener('click', () => {
        window.open('./buynow.html');
    });
});


function renderCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    if (cart.length === 0) {
      document.getElementById("cart-container").innerHTML = "<p>Your cart is empty.</p>";
    } else {
      let cartHTML = "";
      
      for (let i = 0; i < cart.length; i++) {
        let product = cart[i];
        cartHTML += `
          <div class="cart-item">
            <img src="${product.image1}" alt="${product.title}" class="img">
            <h3 class="title">${product.title}</h3>
            <p class="price">₹${product.price}</p>
            <button onclick="removeFromCart(${product.id})" class="remove-btn">Remove</button>
          </div>
        `;
      }
  
      document.getElementById("cart-container").innerHTML = cartHTML;
    }
  }
  
  renderCart();
  


  function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(product => product.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
  