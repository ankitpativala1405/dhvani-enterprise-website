let paymentSelect = document.getElementById("payment"); 
let walletdiv= document.getElementById("walletdiv")
let netdiv = document.getElementById("netdiv");
let upidiv = document.getElementById("upidiv");
let creditdiv = document.getElementById("creditdiv");
let debitdiv = document.getElementById("debitdiv");
let bankdiv = document.getElementById("bankdiv");
let cashdiv = document.getElementById("cashdiv");

paymentSelect.addEventListener("change", function() {
  const selectedPaymentOption = paymentSelect.value;

  cashdiv.style.display = "none";
  bankdiv.style.display = "none";
  creditdiv.style.display = "none";
  debitdiv.style.display = "none";
  netdiv.style.display = "none";
  upidiv.style.display = "none";
  walletdiv.style.display = "none";

  if (selectedPaymentOption === "cash on delivery") {
    cashdiv.style.display = "block";
  } else if (selectedPaymentOption === "bank transfer") {
    bankdiv.style.display = "block";
  } else if (selectedPaymentOption === "credit card") {
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
  }

  alert("You selected:" + selectedPaymentOption);
});


