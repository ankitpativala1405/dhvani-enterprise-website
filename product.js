let data = [
    {
        "id": 1,
        "title": "Portable Mini Sealing Machine, Handheld Packet Sealer for Food, Snacks, Chips, Fresh Storage, Plastic Bags Sealing Machine,(MULTICOLOR)",
        "price": "₹ 199",
        "description": "The vacuum sealing process removes all of the air from your bags or containers so that you can preserve food longer without worrying about freezer burn ruining your favorite foods! The bag sealer also has the switch button function and supports USB charging! Never worry about the unsuitable battery and unstable voltage again.\nThe kitchen gadgets can resist food waste. It helps you store the remaining snacks, food, cookies, pet food, sauce bags, and nuts. This plastic sealer is suitable for chip bags, vacuum sealer bags, cookie bags, pet food bags, and other PP, PE, and PVC bags.\n1.Fully charge the battery before use.\nPlug the portable heat sealer into the power cord to starr charging. When charging, the indicator red light will be on for a long time, and when fully charged, the indicatior red ligjt will be off. At this point you can start using the product.\n2. Open switch button\nToggle the push button forward to turn on the machine, the indicator light blue light is long.\n3.Preheat the machine\nBefore the first use, it needs to be pressed for 5 seconds to warm up, and then it can be used. Please note that it only needs to be preheated before the first use, and it can be used directly afterwards.\n4.Press to seal the bag\nThen simply press the knob and make it move equably. along the edge of any bag and it's sealed airtight.\n\nAnd it have hidden blade. Put the bag into the opening of the sealing machine; press down the button to open the bag and slide to the right to complete the opening.",
        "category": "usb sealer machine",
        "image": "/PHOTO/product photo/2-in-1-Usb-Sealer-Machine/1.jpg",
        "rating": {
          "rate": 4.9,
          "count": 120
        }
      }
      
      
]

let temp = "";
for (let i = 0; i < data.length; i++) {
    temp += `
     <div class="box" id="box" onclick=productdetail()>
        <img src="${data[i].image}" alt="" class="img">
        <h3 class="title">${data[i].title}</h3>
        <p class="price">PRICE:${data[i].price}</p>
        <p class="rate">${data[i].rating.rate}</p>
        <div id="bothbuttons">
        <button onclick=atc() class="add-to-cart">add to cart</button>
        <button onclick=buyn() class="buy-now">Buy now</button> 
        </div>
    </div>`  
}

document.getElementById("container").innerHTML = temp;

const buyn=()=>{ window.open('./buynow.html');}

const atc=()=>{ alert("add your cart page here")}

const productdetail=()=>{window.open('./productdetail.html')}


