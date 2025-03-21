const buynow = () => { window.open('./buynow.html'); }

const addtocart = () => { alert("add your cart page here") }

let details = localStorage.getItem("productId");
console.log("details", details);


let detaildata = [
    { "id": 0,
    "title": "DHVANI ENTERPRISE Portable Mini Sealing Machine, Handheld Packet Sealer for Food, Snacks, Chips, Fresh Storage, Plastic Bags Sealing Machine,(MULTICOLOR)",
    "price": "199",
    "MRP": "406",
    "category":"usb sealer machine",
    "image1": "./PHOTO/product photo/0/1.jpg",
    "image2": "./PHOTO/product photo/0/2.jpg", 
    "image3": "./PHOTO/product photo/0/3.jpg", 
    "image4": "./PHOTO/product photo/0/4.jpg",
    "image5": "./PHOTO/product photo/0/5.jpg", 
    "image6": "./PHOTO/product photo/0/6.jpg",
    "image7": "./PHOTO/product photo/0/7.jpg", 
    "image8": "./PHOTO/product photo/0/8.jpg", 
    "bullet1": "💖 This mini bag sealer is a heat bag sealer, and also a bag opener. You can seal bags easily and keep your food fresh, also with the built-in sharp stainless steel blade to open the bags conveniently. 2-in-1 machine. Enjoy your fresh and crispy snacks.",
    "bullet2": "💖 built-in With a 400mAh battery, the rechargeable hot bond bag sealer comes with a micro USB cable(included), so there is no need to buy extra AA batteries for this chip sealer, save your money and protect the environment.",
    "bullet3": "💖 This food bag sealer is suitable for packages of chips, cookies, salad, pet foods, etc., as well as for packages of salad and vacuum bags, a must-have in daily life and kitchen cooking scenarios. Not for cling films, cellophane bags, kraft paper bags, or pure aluminum bags.",
    "bullet4": "💖 Compared with the old sealer machine, the powerful and efficient heating unit can quickly heat and keep to a working temperature of 0.1s. Turn on the switch, no need to wait, and the sealer directly seals the package firmly.", 
    "bullet5": "💖 Easy To Place & Portable: With the magnet on the back, the delicate mini bag resealer can be attached to the refrigerator, space-saving in the house and not missing anymore. Only 0.2 pounds is also easy to carry outdoors for picnics, camping trips, etc.", 
    "bullet6": "💖 ",
    "bullet7": "💖 ",
    "bullet8": "💖 ", 
    "Descrip1": "The vacuum sealing process removes all of the air from your bags or containers so that you can preserve food longer without worrying about freezer burn ruining your favorite foods! The bag sealer also has the switch button function and supports USB charging! Never worry about the unsuitable battery and unstable voltage again.", 
    "Descrip2": "The kitchen gadgets can resist food waste. It helps you store the remaining snacks, food, cookies, pet food, sauce bags, and nuts. This plastic sealer is suitable for chip bags, vacuum sealer bags, cookie bags, pet food bags, and other PP, PE, and PVC bags.", 
    "Descrip3": "1.Fully charge the battery before use.\nPlug the portable heat sealer into the power cord to starr charging. When charging, the indicator red light will be on for a long time, and when fully charged, the indicatior red ligjt will be off. At this point you can start using the product.",
    "Descrip4": "2. Open switch button.\nToggle the push button forward to turn on the machine, the indicator light blue light is long.", 
    "Descrip5": "3.Preheat the machine.\nBefore the first use, it needs to be pressed for 5 seconds to warm up, and then it can be used. Please note that it only needs to be preheated before the first use, and it can be used directly afterwards.",
    "Descrip6": "4.Press to seal the bag\nThen simply press the knob and make it move equably. along the edge of any bag and it's sealed airtight.", 
    "Descrip7": "And it have hidden blade. Put the bag into the opening of the sealing machine; press down the button to open the bag and slide to the right to complete the opening.", 
    "Descrip8": "",
    "Descrip9": "", 
    "Descrip10": "",
    "Descrip11": "", 
    "Descrip12": "" },
    { 
    "id": 1, 
    "title": "DHVANI ENTERPRISE Women's Faux Georgette Stitched Top With Unstitched Santoon Bottom and Dupatta Full Sleeve Embroidered Anarkali Gown", 
    "price": "599", 
    "MRP": "2199", 
    "category": "Anarkali Gown", 
    "image1": "./PHOTO/product photo/1/1.jpg", 
    "image2": "./PHOTO/product photo/1/2.jpg", 
    "image3": "./PHOTO/product photo/1/3.jpg", 
    "image4": "./PHOTO/product photo/1/4.jpg", 
    "image5": "./PHOTO/product photo/1/5.jpg", 
    "image6": "./PHOTO/product photo/1/6.jpg", 
    "image7": "./PHOTO/product photo/1/7.jpg", 
    "image8": "./PHOTO/product photo/1/8.jpg", 
    "bullet1": "💖 Top: Heavy Faux Georgette With Embroidered Work With Stone, Size: Max Up To 48 Inches Length: Max Up To 52 Inches", 
    "bullet2": "💖 Bottom: Heavy Santoon, Length: 2 MTR, Type: Unstitched", 
    "bullet3": "💖 Dupatta: Heavy Butterfly Net With Embroidery Work With Latkan, Size: 2.20 MTR, Sleeve; Faux Georgette With Embroidered Work", 
    "bullet4": "💖 Type: Semi Stitched, Wash Care: First Time Dry Clean; Package Contain:Top, Bottom and Dupatta", 
    "bullet5": "💖 Closure Type: Zipper; Occasion Type: Ceremony; Item Length Description: Floor Length; Sleeve Type: Long Sleeve", 
    "bullet6": "💖 ", 
    "bullet7": "💖 ", 
    "bullet8": "💖 ", 
    "Descrip1": "DHVANI ENTERPRISE provides you gHeavy Faux Georgette With Embroidered Work With Sequence ( Semi-Stitched ), Size: Max Up To 48 Inches, Length: Max Up To 52 Inches, Flair: 2.70 MTR.", 
    "Descrip2": "Traditional Indian wear Anarkali gowns and suits for women. This Anarkali gown sophisticated look and enhances the beauty of the women. Which can be worn for functions, festivals, parties, and even weddings also.", 
    "Descrip3": "You will be a center of attraction in the event once you ware it. DHVANI ENTERPRISE brings to you this Anarkali suit. Which are available in pink, wine, brown, Rama, green, white, and black shades of attractive colors and are made from georgette fabric.", 
    "Descrip4": "The Anarkali suit is a suitable choice when it comes to choosing ethnic wear or festive wear for your wardrobe. The gown features a beautiful flair with a floral border enhancing the style of the garment.", 
    "Descrip5": "It comes in semi-stitched and can be altered according to your choice of fit and style.", 
    "Descrip6": "You can pair this attractive gown suit with the ethnic footwear of your choice.", 
    "Descrip7": "Also, you can mix and match ethnic jewelry such as bangles, bracelets, and earrings to go along with it. This combination can be worn for festive occasions as well as occasions such as weddings.", 
    "Descrip8": "", 
    "Descrip9": "", 
    "Descrip10": "", 
    "Descrip11": "", 
    "Descrip12": "" 
    }
];

let temporary = null;

if (details == 0) {
    temporary = detaildata[0];  
} else if (details == 1) {
    temporary = detaildata[1]; 
}

let productsdata = `
    <div id="product-detail">
        <div id="product-images">
            <div id="main-image">
                <img src="${temporary.image1}" alt="Main product image" id="main-img">
            </div>
            <div id="thumbnails">
                <img src="${temporary.image2}" alt="" id="image02" onclick=imageswaping("image02")>
                <img src="${temporary.image3}" alt="" id="image03" onclick=imageswaping("image03")>
                <img src="${temporary.image4}" alt="" id="image04" onclick=imageswaping("image04")>
                <img src="${temporary.image5}" alt="" id="image05" onclick=imageswaping("image05")>
                <img src="${temporary.image6}" alt="" id="image06" onclick=imageswaping("image06")>
                <img src="${temporary.image7}" alt="" id="image07" onclick=imageswaping("image07")>
                <img src="${temporary.image8}" alt="" id="image08" onclick=imageswaping("image08")>
            </div>
        </div>
        <div id="product-info">
            <h1>${temporary.title}</h1>
            <h4>Category: ${temporary.category}</h4>
            <div class="priceanddiscount">
                <h1 id="product-price">₹${temporary.price}</h1>
                <h2>- 51%</h2>
            </div>
            <p>M.R.P: ₹${temporary.MRP}</p>
            <p id="product-rating">
                <span>★★★★☆</span> (1200 ratings)
            </p>
            <div id="product-actions">
                <button onclick="addtocart()">Add to Cart</button>
                <button onclick="buynow()">Buy Now</button>
            </div>
            <div id="product-description">
                <h2>Description</h2>
                <h4>${temporary.bullet1}</h4>
                <h4>${temporary.bullet2}</h4>
                <h4>${temporary.bullet3}</h4>
                <h4>${temporary.bullet4}</h4>
                <h4>${temporary.bullet5}</h4>
                <p>${temporary.Descrip1}</p>
                <p>${temporary.Descrip2}</p>
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


