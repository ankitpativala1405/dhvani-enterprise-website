const cartItems = [
    {
        id: 1,
        name: "Laptop",
        price: 999.99,
        quantity: 1,
    },
    {
        id: 2,
        name: "Smartphone",
        price: 499.99,
        quantity: 2,
    }
];

function updateCart() {
    const cartTableBody = document.querySelector('#cart-table tbody');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');

    cartTableBody.innerHTML = ""; 
    let subtotal = 0;

    cartItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
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
