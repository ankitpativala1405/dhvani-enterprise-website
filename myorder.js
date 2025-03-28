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

    let orderHTML = '';

    for (let i = 0; i < filteredOrders.length; i++) {

        orderHTML += `
            <div class="order-item">
                <div class="order-details">
                    <p><strong>Order #${filteredOrders[i].id}</strong></p>
                    <p>Date: ${filteredOrders[i].date}</p>
                    <p>Status: ${filteredOrders[i].status}</p>
                    <p>Total: ${filteredOrders[i].price}</p>
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

const uimaker=()=>{
    let orderList = document.getElementById('orderList');
    let filteredOrders = getFilteredOrders();
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

