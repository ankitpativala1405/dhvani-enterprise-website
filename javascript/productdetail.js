let data=JSON.parse(localStorage.getItem("allproducts"))
    
const buynow = () => { 
  let buyproduct = JSON.parse(localStorage.getItem('cart')) || [];
  buyproduct.push(data[i]);
  localStorage.setItem('buyNowProduct', JSON.stringify(buyproduct));
    window.location.href = '../pages/buynow.html';  
 }

const addtocart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let details = JSON.parse(localStorage.getItem("productDetails"));
    
    let product = {
        id:details.id,
        sku: details.sku, 
        price: details.price,
        quantity: 1, 
    };

    let existingProduct = cart.find((ele) => ele.id === product.id);

    if (existingProduct) {
        let userChoice = window.confirm("This product is already in your cart. Do you want to increase the quantity? Click 'OK' to increase or 'Cancel' to not add it again.");

        if (userChoice) {
            existingProduct.quantity += 1;
            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Product quantity has been increased!");
        } else {
            alert("Product not added to the cart again.");
        }
    } else {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Product has been added to your cart!");
    }
};


let details = JSON.parse(localStorage.getItem("productDetails"));

let productsdata = `
  <div id="product-detail">
    <div id="product-images">
      <div id="main-image">
        <img src="${details.images[0]}" alt="Main product image" id="main-img">
      </div>
      <div id="thumbnails">
        <img src="${details.images[1]}" alt="" id="image02" onclick="imageswaping('image02')">
        <img src="${details.images[2]}" alt="" id="image03" onclick="imageswaping('image03')">
        <img src="${details.images[3]}" alt="" id="image04" onclick="imageswaping('image04')">
        <img src="${details.images[4]}" alt="" id="image05" onclick="imageswaping('image05')">
        <img src="${details.images[5]}" alt="" id="image06" onclick="imageswaping('image06')">
        <img src="${details.images[6]}" alt="" id="image07" onclick="imageswaping('image07')">
        <img src="${details.images[7]}" alt="" id="image08" onclick="imageswaping('image08')">
      </div>
    </div>
    <div id="product-info">
      <h1>${details.title}</h1>
      <h4>Category: ${details.category} || sub-Category: ${details.subcategory}</h4>
      <h4>sku: ${details.sku}</h4>
      <div class="priceanddiscount">
        <h1 id="product-price">₹${details.price}</h1>
        <h2>${Math.round(((parseFloat(details.price) * 100) / parseFloat(details.MRP)) - 100)}%</h2>
      </div>
      <p>M.R.P: ₹${details.MRP}</p>
      <p id="product-rating">
        <span>★★★★☆</span> (1200 ratings)
      </p>
      <div id="product-actions">
        <button onclick="addtocart()">Add to Cart</button>
        <button onclick="buynow()">Buy Now</button>
      </div>
      <div id="product-description">
        <h2>Description</h2>
        ${details.bullet_points.map(bullet => `<h4>${bullet}</h4>`).join('')}
        ${details.descriptions.map(description => `<p>${description}</p>`).join('')}
      </div>
    </div>
  </div>
`;

document.getElementById("shaw-detail-here").innerHTML = productsdata;


 const imageswaping=(id)=>{
    let mainImage = document.getElementById("main-img");
    let thumbnail = document.getElementById(id);

    let mainimagesrc=mainImage.src;
    let thumbnailsrc=thumbnail.src;

      mainImage.src=thumbnailsrc;
      thumbnail.src=mainimagesrc;
 }


