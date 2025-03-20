let data = [
  {
    "id": 0,
    "title": "DHVANI ENTERPRISE Portable Mini Sealing Machine, Handheld Packet Sealer for Food, Snacks, Chips, Fresh Storage, Plastic Bags Sealing Machine,(MULTICOLOR)",
    "price": "₹199",
    "category": "usb sealer machine",
    "image": "./PHOTO/product photo/0/1.jpg",
  },{
    "id": 1,
    "title": "DHVANI ENTERPRISE Women's Faux Georgette Stitched Top With Unstitched Santoon Bottom and Dupatta Full Sleeve Embroidered Anarkali Gown",
    "price": "₹599",
    "category": "Anarkali Gown",
    "image": "./PHOTO/product photo/1/1.jpg",
  },{
    "id": 2,
    "title": "DHVANI ENTERPRISE Knife Set and Scissor, Piece Stainless Steel Kitchen Knife Knives Set with Knife Scissor, Knife Sets (8 Piece Include)",
    "price": "₹399",
    "category": "8 Piece knife Set",
    "image": "./PHOTO/product photo/2/1.jpg",
  },{
    "id": 200,
    "title": "",
    "price": "",
    "category": "",
    "image": "",
  }
      
]

let temp = "";
for (let i = 0; i < data.length; i++) {
    temp += `
     <div class="box" id="box" onclick="productdetail(${data[i].id})">
        <img src="${data[i].image}" alt="" class="img">
        <h3 class="title">${data[i].title}</h3>
        <p class="price">PRICE:${data[i].price}</p>
        <div id="bothbuttons">
        <button onclick=atc() class="add-to-cart">add to cart</button>
        <button onclick=buyn() class="buy-now">Buy now</button> 
        </div>
    </div>`  
}

document.getElementById("container").innerHTML = temp;

const buyn=()=>{ window.open('./buynow.html');}

const atc=()=>{ alert("add your cart page here")}


const productdetail = (productId) => {
  localStorage.setItem('productId', productId);
    window.open('./productdetail.html')
};

