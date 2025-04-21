let detai = JSON.parse(localStorage.getItem("buyNowProduct"));
let sku=detai.sku
let price = Number(detai.price);

const uimaker = (detai) => {
  let subtotal = 0;

  for (let i = 0; i < detai.length; i++) {
    let quantity = document.createElement("p");
    quantity.innerHTML = `${detai[i].quantity}&times;`;

    let sku = document.createElement("p");
    sku.innerHTML = detai[i].sku;

    let prise = document.createElement("p");
    prise.innerHTML = (detai[i].price) * (detai[i].quantity); 
    subtotal += (detai[i].price) * (detai[i].quantity);

    document.getElementById("showquantity").append(quantity);
    document.getElementById("showsku").append(sku);
    document.getElementById("showprice").append(prise);
  }

  let total= document.createElement("p");
  total.innerHTML = ` ₹${subtotal}`; 
  document.getElementById("productprice").append(total);

  let grandtotal = document.createElement("p");
  grandtotal.innerHTML = `₹${subtotal + 100}`;
  document.getElementById("product-total-price").append(grandtotal);
}
uimaker(detai)

document.getElementById("changeaddress").addEventListener("click", function () {
  document.getElementById("changedhomeaddress").style.display = "block";
});

document.getElementById("deliver-btn").addEventListener("click", function () {
  let name = document.getElementById("bname").textContent;
  let contact = document.getElementById("bcontact").textContent;
  let home = document.getElementById("bhnumber").textContent;
  let society = document.getElementById("bsociety").textContent;
  let street = document.getElementById("bstreet").textContent;
  let city = document.getElementById("bcity").textContent;
  let state = document.getElementById("bstate").textContent;
  let pincode = document.getElementById("bspincode").textContent;

  if (!name || !contact || !home || !society || !street || !city || !state || !pincode) {
    let user = window.confirm("Shipping address is compulsory. Without an address, we cannot ship your products. Would you like to enter your address now?");
    if (user) {
      document.getElementById("changedhomeaddress").style.display = "block"; 
    }
  } else {
    document.getElementById("paymentoptiondiv").style.display = "block";
    alert("Thank you for submitting the address. Now please select your payment option.");
  }
  document.getElementById("paymentoptiondiv").style.display = "block";
    alert("Thank you for submitting the address. Now please select your payment option.");
});

document.getElementById("gotoorder").addEventListener("click", () => { 
  document.getElementById("placeorder").style.display = "block";
});

let paymentSelect = document.getElementById("payment");
let walletdiv = document.getElementById("walletdiv");
let netdiv = document.getElementById("netdiv");
let upidiv = document.getElementById("upidiv");
let creditdiv = document.getElementById("creditdiv");
let debitdiv = document.getElementById("debitdiv");
let cashdiv = document.getElementById("cashdiv");

let pay="";

paymentSelect.addEventListener("change", function () {
  let selectedPaymentOption = paymentSelect.value;

  cashdiv.style.display = "none";
  creditdiv.style.display = "none";
  debitdiv.style.display = "none";
  netdiv.style.display = "none";
  upidiv.style.display = "none";
  walletdiv.style.display = "none";

  if (selectedPaymentOption === "choose any option") {
    document.getElementById("usethismethod").style.display = "none";
  } else {
    document.getElementById("usethismethod").style.display = "block";

    if (selectedPaymentOption === "cash on delivery") {
      pay="cash on delivery"
      cashdiv.style.display = "block";
    } else if (selectedPaymentOption === "credit card") {
      pay="Credit card"
      creditdiv.style.display = "block";
    } else if (selectedPaymentOption === "debit card") {
      pay="debit card"
      debitdiv.style.display = "block";
    } else if (selectedPaymentOption === "net banking") {
      pay="net banking"
      netdiv.style.display = "block";
    } else if (selectedPaymentOption === "upi") {
      pay="upi"
      upidiv.style.display = "block";
    } else if (selectedPaymentOption === "dhvani enterprise wallet") {
      pay="dhvani enterprise wallet"
      walletdiv.style.display = "block";
    } else {
      alert("please enter valid options");
      document.getElementById("usethismethod").style.display = "none";
    }
  }

  alert("You selected:" + selectedPaymentOption);
});


document.getElementById("placeorderbutton").addEventListener("click", () => {

  let orderd = JSON.parse(localStorage.getItem("order")) || [];

  let items = JSON.parse(localStorage.getItem("buyNowProduct")) || []; 

  for (let i = 0; i < items.length; i++) {
   
    let orderdata = {
      ids: Date.now(),
      now: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata", hour12: true }),
      status: "pending",
      payment:pay, 
      sku:  items[i].sku,
      price:items[i].price,
      quantity:  items[i].quantity,
      total:  items[i].price *  items[i].quantity, 
      images: items[i].images[0],
    };

    orderd.push(orderdata);
  }
  localStorage.setItem("order", JSON.stringify(orderd));

  alert("Thank you for submitting your order.");

  localStorage.removeItem("buyNowProduct");

});



const errordetail=(id,msg)=>{

  let iserror = document.getElementById(id).querySelector('p');
  if (iserror) {
    iserror.remove(); 
  }
  let error = document.createElement("p");
  error.innerHTML = msg;

  document.getElementById(id).append(error);
  return;
  }

let shipings = JSON.parse(localStorage.getItem("shipings")) || [];

document
  .getElementById("myform")
  .addEventListener("submit", function customer(e) {
    e.preventDefault();

    document.getElementById("bname").innerHTML = "";
    document.getElementById("bcontact").innerHTML = "";
    document.getElementById("bhnumber").innerHTML = "";
    document.getElementById("bsociety").innerHTML = "";
    document.getElementById("bstreet").innerHTML = "";
    document.getElementById("blandmark").innerHTML = "";
    document.getElementById("bcity").innerHTML = "";
    document.getElementById("bstate").innerHTML = "";
    document.getElementById("bspincode").innerHTML = "";

    let name = document.getElementById("buyername").value;
    let contact = document.getElementById("contactnumber").value;
    let homenumber = document.getElementById("homenumber").value;
    let society = document.getElementById("societyname").value;
    let street = document.getElementById("streetname").value;
    let landmark = document.getElementById("landmark").value;
    let city = document.getElementById("cityname").value;
    let state = document.getElementById("statename").value;
    let pincode = document.getElementById("pincode").value;

    let nameRegex = /^[A-Za-z\s]{2,}$/;
    let cityRegex = /^[A-Za-z\s\-]+$/;
    let stateRegex = /^[A-Za-z\s\-]+$/;
    let pincodeRegex = /^\d{6}$/;

   // 1. Validate Name
   if (!nameRegex.test(name)) {
    errordetail("errorname", "Please enter a valid name.");
    document.getElementById("buyername").setAttribute("class", "failed");
    return;
   } else {
    document.getElementById("buyername").setAttribute("class", "passed");
  }

  // 2. Validate Contact
  if (contact.length < 10 || contact.length > 10) {
    errordetail("errorcontactnumber", "Please enter a valid contact number");
    document.getElementById("contactnumber").setAttribute("class", "failed");
    return;
  } else {
    document.getElementById("contactnumber").setAttribute("class", "passed");
  }

  //3.city validation
   if (!cityRegex.test(city)) {
    errordetail("errorcityname", "Please enter a valid city name.");
   document.getElementById("cityname").setAttribute("class", "failed");
    return;
  } else {
    document.getElementById("cityname").setAttribute("class", "passed");
   }

 //4.state validation
   if (!stateRegex.test(state)) {
    errordetail("errorstate", "Please enter a valid state name.");
    document.getElementById("statename").setAttribute("class", "failed");
    return;
   } else {
    document.getElementById("statename").setAttribute("class", "passed");
  }

  //5.pincode validation
   if (!pincodeRegex.test(pincode)) {
    errordetail("errorpincode", "Please enter a valid pincode.");
    document.getElementById("pincode").setAttribute("class", "failed");
    return;
   } else {
    document.getElementById("pincode").setAttribute("class", "passed");
  }


    let deleveringadd ={
      name: name,
      contact: contact,
      homenumber: homenumber,
      society: society,
      street: street,
      landmark: landmark,
      city: city,
      state: state,
      pincode: pincode
    }

    shipings.push(deleveringadd)

    localStorage.setItem("shipings",JSON.stringify(shipings));

    document.getElementById("bname").innerHTML = name;
    document.getElementById("bcontact").innerHTML = contact;
    document.getElementById("bhnumber").innerHTML = homenumber;
    document.getElementById("bsociety").innerHTML = society;
    document.getElementById("bstreet").innerHTML = street;
    document.getElementById("blandmark").innerHTML = landmark;
    document.getElementById("bcity").innerHTML = city;
    document.getElementById("bstate").innerHTML = state;
    document.getElementById("bspincode").innerHTML = pincode;

    document.getElementById("changedhomeaddress").style.display = "none";

  });



const getvalue = (id) => {
  return document.getElementById(id).value;
};



let data=JSON.parse(localStorage.getItem("allproducts"))

//search

const search = (value) => {
if (value === "") {
document.getElementById("showsrarch").style.display = "none"; 
} else {
let temp = data.filter((ele) =>
ele.title.toLowerCase().includes(value.toLowerCase()))
searchvalue(temp); 
}
};

document.getElementById("search").addEventListener("input", () => {
document.getElementById("showsrarch").style.display = "flex";
let value = document.getElementById("search").value;
search(value);
});


const searchvalue = (data) => {
document.getElementById("showsrarch").innerHTML = ""

if (data.length === 0) {
document.getElementById("showsrarch").innerHTML = "No products found."; 
return;
}

document.getElementById("showsrarch").innerHTML = data.map((item) => {
return `
<div class="product">
  <h2>${item.title}</h2>
  <p>Price: ₹${item.price}</p>
  <p>MRP: ₹${item.MRP}</p>
  <p>Category: ${item.category}</p>
  <p>Subcategory: ${item.subcategory}</p>
  <img src="${item.images[0]}" alt="${item.title}" />
  <button>Buy Now</button>
</div>
`;
}); 
};