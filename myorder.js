let currentPage = 1;
// let orders = [
//     { id: 1, date: "2025-03-22", status: "Delivered", total: "$120.00", payment: "Credit Card" },
//     { id: 2, date: "2025-03-19", status: "Pending", total: "$85.00", payment: "PayPal" },
//     { id: 3, date: "2025-03-15", status: "Delivered", total: "$50.00", payment: "Credit Card" },
//     { id: 4, date: "2025-03-10", status: "Cancelled", total: "$75.00", payment: "Credit Card" },
//     { id: 5, date: "2025-03-05", status: "Pending", total: "$200.00", payment: "PayPal" },
// ];
let orders = JSON.parse(localStorage.getItem("order")) || [];

function renderOrders() {
    const orderList = document.getElementById('orderList');
    const filteredOrders = getFilteredOrders();

    orderList.innerHTML = '';
    filteredOrders.forEach(order => {
        const orderDiv = document.createElement('div');
        orderDiv.classList.add('order-item');
        orderDiv.innerHTML = `
            <div class="order-details">
                <p><strong>Order #${order.id}</strong></p>
                <p>Date: ${order.date}</p>
                <p>Status: ${order.status}</p>
                <p>Total: ${order.total}</p>
                <p>Payment: ${order.payment}</p>
            </div>
            <div class="order-action">
                <button onclick="viewOrder(${order.id})">View Details</button>
                <button onclick="reorder(${order.id})">Reorder</button>
            </div>
        `;
        orderList.appendChild(orderDiv);
    });
}

function getFilteredOrders() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const statusFilter = document.getElementById('statusFilter').value;
    
    return orders.filter(order => {
        const matchesSearch = order.id.toString().includes(searchQuery) || order.status.toLowerCase().includes(searchQuery);
        const matchesStatus = !statusFilter || order.status === statusFilter;
        return matchesSearch && matchesStatus;
    });
}

function applyFilter() {
    renderOrders();
}

function changePage(direction) {
    currentPage += direction;
    renderOrders();
}

function viewOrder(orderId) {
    alert(`Viewing details for Order #${orderId}`);
}

function reorder(orderId) {
    alert(`Reordering Order #${orderId}`);
}

renderOrders(); // Initial render
