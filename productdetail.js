const buynow = () => { window.open('./buynow.html'); }

const addtocart = () => { alert("add your cart page here") }

 let details=JSON.parse(localStorage.getItem("productDetails"))

 
let productsdata = `
    <div id="product-detail">
        <div id="product-images">
            <div id="main-image">
                <img src="${details.image1}" alt="Main product image" id="main-img">
            </div>
            <div id="thumbnails">
                <img src="${details.image2}" alt="" id="image02" onclick=imageswaping("image02")>
                <img src="${details.image3}" alt="" id="image03" onclick=imageswaping("image03")>
                <img src="${details.image4}" alt="" id="image04" onclick=imageswaping("image04")>
                <img src="${details.image5}" alt="" id="image05" onclick=imageswaping("image05")>
                <img src="${details.image6}" alt="" id="image06" onclick=imageswaping("image06")>
                <img src="${details.image7}" alt="" id="image07" onclick=imageswaping("image07")>
                <img src="${details.image8}" alt="" id="image08" onclick=imageswaping("image08")>
            </div>
        </div>
        <div id="product-info">
            <h1>${details.title}</h1>
            <h4>Category: ${details.category}</h4>
            <h4>sub-Category: ${details.subcategory}</h4>
            <div class="priceanddiscount">
                <h1 id="product-price">₹${details.price}</h1>
                <h2>${ Math.round(((parseFloat(details.price)*100)/parseFloat(details.MRP))-100)}</h2>
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
                <h4>${details.bullet1}</h4>
                <h4>${details.bullet2}</h4>
                <h4>${details.bullet3}</h4>
                <h4>${details.bullet4}</h4>
                <h4>${details.bullet5}</h4>
                <h4>${details.bullet6}</h4>
                <h4>${details.bullet7}</h4>
                <h4>${details.bullet8}</h4>
                <p>${details.Descrip1}</p>
                <p>${details.Descrip2}</p>
                <p>${details.Descrip3}</p>
                <p>${details.Descrip4}</p>
                <p>${details.Descrip5}</p>
                <p>${details.Descrip6}</p>
                <p>${details.Descrip7}</p>
                <p>${details.Descrip8}</p>
                <p>${details.Descrip9}</p>
                <p>${details.Descrip10}</p>
                <p>${details.Descrip11}</p>
                <p>${details.Descrip12}</p>
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


