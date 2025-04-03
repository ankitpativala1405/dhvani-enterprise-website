let data=JSON.parse(localStorage.getItem("allproducts"))

//dispaly show detail
const uimaker=(data)=> {
  document.getElementById('container').innerHTML = ''; 

  for (let i = 0; i < data.length; i++) {
    let Image = document.createElement("img");
    Image.src = data[i].images[0];
    Image.setAttribute("class", "img");  

    let icon = document.createElement("img");
    icon.src = "../PHOTO/wishlist.png";
    icon.setAttribute("class", "icon");
    icon.addEventListener("click", (event) => {
        event.stopPropagation();
     icon.src = "../PHOTO/wishlist-swaping.png"; 

     function addToWishlist(product) {
      let wishlist = JSON.parse(localStorage.getItem('wishlisted')) || [];
      let productExists = wishlist.find(item => item.id === product.id);
      if (productExists) {
        alert("This product is already in your wishlist.");
        return;
      }
      wishlist.push(product);
      localStorage.setItem('wishlisted', JSON.stringify(wishlist));
      alert("Your product has been added to the wishlist.");
    }

    if (data && data[i]) {
      addToWishlist(data[i]); 
    }
});


    let title = document.createElement("h3"); 
    title.innerHTML = data[i].title;
    title.setAttribute("class", "title");

    let price = document.createElement("p");
    price.innerHTML = `PRICE: ₹${data[i].price}`;
    price.setAttribute("class", "price");

    let mrp = document.createElement("p");
    mrp.innerHTML = `MRP: ₹${data[i].MRP}`;
    mrp.setAttribute("class", "mrp");

    let atcbutton = document.createElement("button");
    atcbutton.innerHTML = "Add to Cart";
    atcbutton.setAttribute("class", "add-to-cart");
    atcbutton.addEventListener('click', (event) => {
      event.stopPropagation();
      atc(data[i].id); 
    });

    let buynow = document.createElement("button");
    buynow.innerHTML = "Buy Now";
    buynow.setAttribute("class", "buy-now");
    buynow.addEventListener('click', () => { 
    let buyproduct = JSON.parse(localStorage.getItem('buyNowProduct')) || [];
    buyproduct.push(data[i]);
    localStorage.setItem('buyNowProduct', JSON.stringify(buyproduct));
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
    localStorage.setItem('productDetails', JSON.stringify(data[i])); 
    window.open('../pages/productdetail.html'); 
  })

    document.getElementById('container').append(div);
  }
}

uimaker(data) 

  //add to cart product

  const atc = (id) => {
    let product = data.find((ele) => ele.id === id);
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

  //sorting 
sortDropdown.addEventListener('click', function() {
  let sortValue =  document.getElementById('sortDropdown').value;

  if (sortValue === "lth") {
    data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));//low to high
  } else if (sortValue === "htl") {
    data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));//high to low
  }
  uimaker(data);
});


//showing subcategory

let getvalues=(id)=>{ 
  return document.getElementById(id);
}

let categoryselect=getvalues("category")
let allcategories=getvalues("all")  
let electronicsselect=getvalues("electronics")
let clothingselect=getvalues("clothing")
let fashionselect=getvalues("Fashion & Apparel")
let foodselect=getvalues("Food & Beverages")
let homeselect=getvalues("Home & Living & kitchenware")
let beautyselect=getvalues("Beauty & Personal Care")
let toysselect=getvalues("Toys & Hobbies")
let Servicesselect=getvalues("Services")
let hardwareselect=getvalues("DIY and Hardware")
let mediaselect=getvalues("Media")


categoryselect.addEventListener("change", () => {
  let selectedcategory = categoryselect.value;
  console.log("value",selectedcategory);
  

  electronicsselect.style.display = "none";
  clothingselect.style.display = "none";
  fashionselect.style.display = "none";
  foodselect.style.display = "none";
  homeselect.style.display = "none";
  beautyselect.style.display = "none";
  toysselect.style.display = "none";
  Servicesselect.style.display = "none";
  hardwareselect.style.display = "none";
  mediaselect.style.display = "none";

  
  if (selectedcategory == "all") {
    uimaker(data); 
  } 
  else {
    if (selectedcategory == "electronics") {
      electronicsselect.style.display = "block";
    }
    else if (selectedcategory == "clothing") {
      clothingselect.style.display = "block";
    } 
    else if (selectedcategory == "Fashion & Apparel") {
      fashionselect.style.display = "block";
    } else if (selectedcategory == "Food & Beverages") {
      foodselect.style.display = "block";
    } else if (selectedcategory == "Home & Living & kitchenware") {
      homeselect.style.display = "block";
    } else if (selectedcategory == "Beauty & Personal Care") {
      beautyselect.style.display = "block";
    } else if (selectedcategory == "Toys & Hobbies") {
      toysselect.style.display = "block";
    } else if (selectedcategory == "Services") {
      Servicesselect.style.display = "block";
    } else if (selectedcategory == "DIY and Hardware") {
      hardwareselect.style.display = "block";
    } else if (selectedcategory == "Media") {
      mediaselect.style.display = "block";
    }
  }

});


// filter category
const filterbycategory = (category) => {
  if (category == "all") {
    uimaker(data);
  } else {
    let temp = data.filter((ele) => ele.category == category);
    console.log(temp);
    
    uimaker(temp);
  }
};

document.getElementById("category").addEventListener("input", () => { 
  let category=document.getElementById("category").value
  console.log(category)
  filterbycategory(category)});


  // Filter by Subcategory

  const filterbysubcategory = (subcategory) => {
    let selectedCategory = document.getElementById('category').value;
    if (subcategory === "" || subcategory === "all") {
      if (selectedCategory === "all") {
        uimaker(data); 
      } else 
      {    let temp = data.filter((ele) => ele.category === selectedCategory); 
        uimaker(temp);
      }
    } else {
      let temp = data.filter((ele) => ele.category === selectedCategory && ele.subcategory === subcategory);
      uimaker(temp);
    }
    
  };

  electronicsselect.addEventListener("input", () => {
    let selectedSubcategory = electronicsselect.value;
    filterbysubcategory(selectedSubcategory);
  });
  
  clothingselect.addEventListener("input", () => {
    let selectedSubcategory = clothingselect.value;
    filterbysubcategory(selectedSubcategory);
  });
  
  fashionselect.addEventListener("input", () => {
    let selectedSubcategory = fashionselect.value;
    filterbysubcategory(selectedSubcategory);
  });
  
  foodselect.addEventListener("input", () => {
    let selectedSubcategory = foodselect.value;
    filterbysubcategory(selectedSubcategory);
  });
  
  homeselect.addEventListener("input", () => {
    let selectedSubcategory = homeselect.value;
    filterbysubcategory(selectedSubcategory);
  });
  
  beautyselect.addEventListener("input", () => {
    let selectedSubcategory = beautyselect.value;
    filterbysubcategory(selectedSubcategory);
  });
  
  toysselect.addEventListener("input", () => {
    let selectedSubcategory = toysselect.value;
    filterbysubcategory(selectedSubcategory);
  });
  
  Servicesselect.addEventListener("input", () => {
    let selectedSubcategory = Servicesselect.value;
    filterbysubcategory(selectedSubcategory);
  });
  
  hardwareselect.addEventListener("input", () => {
    let selectedSubcategory = hardwareselect.value;
    filterbysubcategory(selectedSubcategory);
  });
  
  mediaselect.addEventListener("input", () => {
    let selectedSubcategory = mediaselect.value;
    filterbysubcategory(selectedSubcategory);
  });
  

  //slider of filterbar
document.getElementById("price").addEventListener("input", function() {
  let Price = document.getElementById("price").value;
  document.getElementById("price-value").innerHTML = `upto ₹${Price}`;

  let temp = data.filter((product) => parseFloat(product.price) <= parseFloat(Price));
  uimaker(temp); 
});


//fliter by check box
const filterBycheckbox = () => {
  let filteredData = data; 

  let priceRanges = [];

  if (document.getElementById("price-0-200").checked) {
    priceRanges.push((ele) => parseFloat(ele.price) <= 200);
  }
  if (document.getElementById("price-201-500").checked) {
    priceRanges.push((ele) => parseFloat(ele.price) > 200 && parseFloat(ele.price) <= 500);
  }
  if (document.getElementById("price-501-1000").checked) {
    priceRanges.push((ele) => parseFloat(ele.price) > 500 && parseFloat(ele.price) <= 1000);
  }
  if (document.getElementById("price-1001-1500").checked) {
    priceRanges.push((ele) => parseFloat(ele.price) > 1000 && parseFloat(ele.price) <= 1500);
  }
  if (document.getElementById("price-1501-2000").checked) {
    priceRanges.push((ele) => parseFloat(ele.price) > 1500 && parseFloat(ele.price) <= 2000);
  }
  if (document.getElementById("price-above-2000").checked) {
    priceRanges.push((ele) => parseFloat(ele.price) > 2000);
  }

  if (priceRanges.length > 0) {
    filteredData = filteredData.filter((ele) => 
      priceRanges.some((range) => range(ele))
    );
  }

  uimaker(filteredData);
}

document.getElementById("checkbox-submit").addEventListener("click", filterBycheckbox);

//reset check box

document.getElementById("checkbox-reset").addEventListener("click",()=>{
  document.getElementById("price-0-200").checked = false;
  document.getElementById("price-201-500").checked = false;
  document.getElementById("price-501-1000").checked = false;
  document.getElementById("price-1001-1500").checked = false;
  document.getElementById("price-1501-2000").checked = false;
  document.getElementById("price-above-2000").checked = false;

  uimaker(data);

})


//search

const search = (value) => {
  let temp = data.filter((ele) =>
    ele.title.toLowerCase().includes(value.toLowerCase())
  );
  uimaker(temp);
};

document.getElementById("search").addEventListener("input", () => {
  let value = document.getElementById("search").value;
  search(value);
});

