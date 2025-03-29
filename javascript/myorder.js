let orders = JSON.parse(localStorage.getItem("order")) || [];

function renderOrders() {
    let  orderList = document.getElementById('orderList');
    let filteredOrders = getFilteredOrders();

    orderList.innerHTML = '';

    let orderHTML = '';

    for (let i = 0; i < filteredOrders.length; i++) {

        orderHTML += `
            <div class="order-item">
                <div class="order-details">
                    <p><strong>Order ID #${filteredOrders[i].id}</strong></p>
                    <p>Sku:${filteredOrders[i].sku}</p>
                    <p>Date: ${filteredOrders[i].now}</p>
                    <p>Status: ${filteredOrders[i].status}</p>
                    <p>Total: ${filteredOrders[i].total}</p>
                    <p>Payment: ${filteredOrders[i].payment}</p>
                </div>
                <div class="order-action">
                    <button onclick="viewOrder(${filteredOrders[i].id})">View Details</button>
                    <button onclick="reorder(${filteredOrders[i].id})">Reorder</button>
                </div>
            </div>
        `;
    }

    orderList.innerHTML = orderHTML;
}


function getFilteredOrders() {
    let searchQuery = document.getElementById('search').value.toLowerCase();
    let statusFilter = document.getElementById('statusFilter').value;
    
    return orders.filter((order) => {
        let Search = order.id.toString().includes(searchQuery) || order.status.toLowerCase().includes(searchQuery);
        let Status = !statusFilter || order.status === statusFilter;
        return Search && Status;
    });
}

function applyFilter() {
    renderOrders();
}

let currentPage = 1;

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
