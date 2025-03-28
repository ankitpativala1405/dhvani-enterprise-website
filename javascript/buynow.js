let detai = JSON.parse(localStorage.getItem("buyNowProduct"));
let sku=detai.sku
let price = Number(detai.price);
document.getElementById("productprice").innerHTML = `₹${price}`;
document.getElementById("product-total-price").innerHTML = `₹${price + 100}`;

document.getElementById("changeaddress").addEventListener("click", function () {
  document.getElementById("changedhomeaddress").style.display = "block";
});

document.getElementById("deliver-btn").addEventListener("click", function () {
  alert(
    "Thank you for submitting address.now please select your payment option"
  );
  document.getElementById("paymentoptiondiv").style.display = "block";
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

let pay=""

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

  let date = {
    id: Date.now(),
    now: new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      hour12: true,
    }),
    status: "pending",
    total: `₹${price}`,
    payment:pay,
    sku:sku
  };
  orderd.push({...date,detai});
  localStorage.setItem("order", JSON.stringify(orderd));
  alert("Thank you for submitting place order.");
});

document
  .getElementById("changeadd")
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

const errordetail=(id,msg)=>{
  let error = document.createElement("p");
  error.innerHTML = msg;

  document.getElementById(id).append(error);
  return;
  }

const getvalue = (id) => {
  return document.getElementById(id).value;
};

let shipping = [];
document.getElementById("myform").addEventListener("submit", (event) => {
  event.preventDefault();

  let name = getvalue("buyername");
  let contact = getvalue("contactnumber");
  let homenumber = getvalue("homenumber");
  let society = getvalue("societyname");
  let street = getvalue("streetname");
  let landmark = getvalue("landmark");
  let city = getvalue("cityname");
  let state = getvalue("statename");
  let pincode = getvalue("pincode");

  let nameRegex = /^[A-Za-z\s]{2,}$/;
  let contactRegex = / ^(\+1\s?)?(\()?(\d{3})(\))?[\s\-]?\d{3}[\s\-]?\d{4}$/;
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
  if (!contactRegex.test(contact)) {
    errordetail("errorcontact", "Please enter a valid contact number.");
    document.getElementById("contactnumber").setAttribute("class", "failed");
    return;
  } else {
    document.getElementById("contactnumber").setAttribute("class", "passed");
  }

  //3.city validation
  if (!cityRegex.test(city)) {
    errordetail("errorcity", "Please enter a valid city name.");
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

  let shippingdetail = {
    name: name,
    contact: contact,
    homenumber: homenumber,
    society: society,
    street: street,
    landmark: landmark,
    city: city,
    state: state,
    pincode: pincode,
  };

  shipping.push(shippingdetail);
  localStorage.setItem("shipping", JSON.stringify(shipping));

  alert(
    "Thank you for submitting shipping address. Now please select your payment option"
  );
});
