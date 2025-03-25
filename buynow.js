let detai = JSON.parse(localStorage.getItem("buyNowProduct"));
let price =  Number(detai.price);
document.getElementById("productprice").innerHTML = `₹${price}`;
document.getElementById("product-total-price").innerHTML = `₹${price + 100}`;

document.getElementById("changeaddress").addEventListener("click", function() {
  document.getElementById("changedhomeaddress").style.display = 'block';
});

document.getElementById("deliver-btn").addEventListener("click", function() {
  alert("Thank you for submitting address.now please select your payment option")
  document.getElementById("paymentoptiondiv").style.display = 'block';
});

document.getElementById("gotoorder").addEventListener("click",()=>{
  document.getElementById("placeorder").style.display = 'block';
})

document.getElementById("placeorderbutton").addEventListener("click",()=>{
  alert("Thank you for submitting place order.")
})

let paymentSelect = document.getElementById("payment"); 
let walletdiv= document.getElementById("walletdiv")
let netdiv = document.getElementById("netdiv");
let upidiv = document.getElementById("upidiv");
let creditdiv = document.getElementById("creditdiv");
let debitdiv = document.getElementById("debitdiv");
let cashdiv = document.getElementById("cashdiv");

paymentSelect.addEventListener("change", function() {
  let selectedPaymentOption = paymentSelect.value;

  cashdiv.style.display = "none";
  creditdiv.style.display = "none";
  debitdiv.style.display = "none";
  netdiv.style.display = "none";
  upidiv.style.display = "none";
  walletdiv.style.display = "none";

  if(selectedPaymentOption === "choose any option"){
    document.getElementById("usethismethod").style.display = "none";
  
  }else{
    document.getElementById("usethismethod").style.display = 'block';
  
  if (selectedPaymentOption === "cash on delivery") {
    cashdiv.style.display = "block";
  }  else if (selectedPaymentOption === "credit card") {
    creditdiv.style.display = "block";
  } else if (selectedPaymentOption === "debit card") {
    debitdiv.style.display = "block";
  } else if (selectedPaymentOption === "net banking") {
    netdiv.style.display = "block";
  } else if (selectedPaymentOption === "upi") {
    upidiv.style.display = "block";
} else if (selectedPaymentOption === "dhvani enterprise wallet") {
    walletdiv.style.display = "block";
  } else {
    alert("please enter valid options")
     document.getElementById("usethismethod").style.display = "none";
  }}

  alert("You selected:" + selectedPaymentOption);
});


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("changeadd").addEventListener("click", function customer(e) {
    e.preventDefault();

    document.getElementById("bname").innerHTML = "";
    document.getElementById("bhnumber").innerHTML = "";
    document.getElementById("bsociety").innerHTML = "";
    document.getElementById("bstreet").innerHTML = "";
    document.getElementById("blandmark").innerHTML = "";
    document.getElementById("bcity").innerHTML = "";
    document.getElementById("bstate").innerHTML = "";
    document.getElementById("bspincode").innerHTML = "";

    let name = document.getElementById("buyername").value;
    let homenumber = document.getElementById("homenumber").value;
    let society = document.getElementById("societyname").value;
    let street = document.getElementById("streetname").value;
    let landmark = document.getElementById("landmark").value;
    let city = document.getElementById("cityname").value;
    let state = document.getElementById("statename").value;
    let pincode = document.getElementById("pincode").value;

    document.getElementById("bname").innerHTML = name;
    document.getElementById("bhnumber").innerHTML = homenumber;
    document.getElementById("bsociety").innerHTML = society;
    document.getElementById("bstreet").innerHTML = street;
    document.getElementById("blandmark").innerHTML = landmark;
    document.getElementById("bcity").innerHTML = city;
    document.getElementById("bstate").innerHTML = state;
    document.getElementById("bspincode").innerHTML = pincode;

    document.getElementById("changedhomeaddress").style.display = "none";
  });
});



