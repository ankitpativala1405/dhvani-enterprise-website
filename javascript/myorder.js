let orders = JSON.parse(localStorage.getItem("order")) || [];

// console.log(orders);

const uimaker=(orders)=> {
    document.getElementById("orderlist").innerHTML = ''; 
  
    for (let i = 0; i < orders.length; i++) {


        let image=document.createElement("img");
        image.src = orders[i].image1;

        let divimage=document.createElement("div")
        divimage.append(image)
        divimage.setAttribute("class","divimage")

        let  id=document.createElement("h4")
        id.innerHTML = `Order ID #${orders[i].id}`

        let sku=document.createElement("p")
        sku.innerHTML = `SKU: ${orders[i].sku}`

        let date=document.createElement("p")
        date.innerHTML = `Date: ${orders[i].now}`

        let status=document.createElement("p")
        status.innerHTML = `Status: ${orders[i].status}`

        let total=document.createElement("p")
        total.innerHTML = `Total: ${orders[i].total}`

        let payment=document.createElement("p")
        payment.innerHTML = `Payment: ${orders[i].payment}`

        let divdetail=document.createElement("div")
        divdetail.append(id,sku,date,status,total,payment)


       let divinfo=document.createElement("div")
       divinfo.append(divdetail,divimage)
       divinfo.setAttribute("class","order-details" )

       let viewbutton=document.createElement("button")
       viewbutton.innerHTML = "View Details"

       let orderbutton=document.createElement("button")
       orderbutton.innerHTML = "Reorder"

       let buttons=document.createElement("div")
       buttons.append(viewbutton,orderbutton)
       buttons.setAttribute("class","order-action" )

       let div=document.createElement("div")
       div.append(divinfo,buttons)
       div.setAttribute("class","order-item")
        
       document.getElementById("orderlist").append(div)
    }

}

uimaker(orders);


//SEARCH BY SKU AND ORDERID
const search = (value) => {
    let temp = orders.filter((ele) =>
      ele.sku.toLowerCase().includes(value.toLowerCase())  || ele.id.toString().includes(value)
    
);
    uimaker(temp);
  };
 
  document.getElementById("orderSearch").addEventListener("input", () => {
    let value = document.getElementById("orderSearch").value;
    search(value);
  });


//filter by status

document.getElementById("statusfilter").addEventListener("input", () => { 
  let filter = document.getElementById("statusfilter").value;
  console.log(filter);

    if (filter === "all") {
      uimaker(orders); 
    } else {
      let temp = orders.filter((ele) => ele.status.toString() === filter.toString());
      console.log(temp);
      
      uimaker(temp)
    }
});

//filter by payment method

    document.getElementById("paymentmethod").addEventListener("input", () => { 
    let filter = document.getElementById("paymentmethod").value;
    if (filter === "all") {
      uimaker(orders); 
    } else {
      let temp = orders.filter((ele) => ele.payment.toString() === filter.toString());
      console.log(temp);
      
      uimaker(temp)
    }
  });
