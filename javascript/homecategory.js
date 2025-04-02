let data=JSON.parse(localStorage.getItem("allproducts"))

  let clickedcategory=JSON.parse(localStorage.getItem('clicked_category'))

  // let products = data.find(ele => ele.category == clickedcategory);

  let products = data.filter(ele => clickedcategory.toString().includes(ele.category.toString()));
  

  console.log(products);
  
  // uimaker(data) 
  const uimaker=(products)=> {
    document.getElementById("main-container").innerHTML = ''; 
  
    for (let i = 0; i < products.length; i++) {
      let Image = document.createElement("img");
      Image.src = products[i].images[0];
      Image.setAttribute("class", "img");  
  
      let icon = document.createElement("img");
      icon.src = "../PHOTO/wishlist.png";
      icon.setAttribute("class", "icon");
      icon.addEventListener("click", (event) => {
          event.stopPropagation();
       icon.src = "../PHOTO/wishlist-swaping.png"; 
  
    if (products && products[i]) {
    
      let wishlist = JSON.parse(localStorage.getItem('wishlisted')) || [];
  
      if (!wishlist.includes(products[i])) {
        wishlist.push(products[i]);
      }
      
      localStorage.setItem('wishlisted', JSON.stringify(wishlist));
    } 
  });
  
  
      let title = document.createElement("h3"); 
      title.innerHTML = products[i].title;
      title.setAttribute("class", "title");
  
      let price = document.createElement("p");
      price.innerHTML = `PRICE: ₹${products[i].price}`;
      price.setAttribute("class", "price");
  
      let mrp = document.createElement("p");
      mrp.innerHTML = `MRP: ₹${products[i].MRP}`;
      mrp.setAttribute("class", "mrp");
  
      let atcbutton = document.createElement("button");
      atcbutton.innerHTML = "Add to Cart";
      atcbutton.setAttribute("class", "add-to-cart");
      atcbutton.addEventListener('click', (event) => {
        event.stopPropagation();
        atc(products[i].id); 
      });
  
      let buynow = document.createElement("button");
      buynow.innerHTML = "Buy Now";
      buynow.setAttribute("class", "buy-now");
      buynow.addEventListener('click', () => {
        localStorage.setItem('buyNowProduct', JSON.stringify(products[i])); 
        window.location.href = '../pages/buynow.html';  
      });
  
      let div2=document.createElement("div")
      div2.append(atcbutton,buynow)
      div2.setAttribute("class","div2")
  
      let div = document.createElement('div');
      div.setAttribute("class", "box");
      div.setAttribute("id", "box");
      div.append(Image, title, price, div2,icon);
    div.addEventListener("click", ()=>{
      localStorage.setItem('productDetails', JSON.stringify(products[i])); 
      window.open('../pages/productdetail.html'); 
    })
  
      document.getElementById("main-container").append(div);
    }
  }
  
 
  if(products.length === 0){
    document.getElementById("main-container").innerHTML = `<h4>Not Found Product Youe Selected category &rarr; <h2>${clickedcategory}</h2></h4>`;
  }else{
    uimaker(products);
  }


  const atc = (id) => {
    let product = products.find((ele) => ele.id === id);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    let existingProduct = cart.find((ele) => ele.id === id);
  
    if (existingProduct) {
      let userChoice = window.confirm("This product is already in your cart. Do you want to increase the quantity?\n Click 'OK' to increase or \n'Cancel' to not add it again.");
  
      if (userChoice) {
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Product quantity has been increased!");
      } else {
        alert("Product not added to the cart again.");
      }
    }
     else {
      product.quantity = 1; 
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Product has been added to your cart!");
    }
  };