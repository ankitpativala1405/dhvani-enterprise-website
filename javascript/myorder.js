let orders = JSON.parse(localStorage.getItem("order")) || [];

// console.log(orders[0]);

const uimaker=(orders)=> {
    document.getElementById("orderlist").innerHTML = ''; 
  
    for (let i = 0; i < orders.length; i++) {


        let image=document.createElement("img");
        image.src = orders[i].images;

        let divimage=document.createElement("div")
        divimage.append(image)
        divimage.setAttribute("class","divimage")

        let  id=document.createElement("h4")
        id.innerHTML = `Order ID #${orders[i].ids}`

        let sku=document.createElement("p")
        sku.innerHTML = `SKU: ${orders[i].sku}`

        let date=document.createElement("p")
        date.innerHTML = `Date: ${orders[i].now}`

        let status=document.createElement("p")
        status.innerHTML = `Status: ${orders[i].status}`

        let total=document.createElement("p")
        total.innerHTML = `total: ${orders[i].total}`

        let price=document.createElement("p")
        price.innerHTML = `Price: ${orders[i].price}`

        let quantity=document.createElement("p")
        quantity.innerHTML = `Quantity: ${orders[i].quantity}`

        let payment=document.createElement("p")
        payment.innerHTML = `Payment: ${orders[i].payment}`

        let divdetail=document.createElement("div")
        divdetail.append(id,sku,date,status,price,quantity,total,payment)


       let divinfo=document.createElement("div")
       divinfo.append(divdetail,divimage)
       divinfo.setAttribute("class","order-details" )

       let viewbutton=document.createElement("button")
       viewbutton.innerHTML = "View Details"

       let orderbutton=document.createElement("button")
       orderbutton.innerHTML = "Reorder"
       orderbutton.addEventListener("click",()=>{
        alert(`reorder creating for \nSKU: ${orders[i].sku} and \n payment is ${orders[i].total}`)
        localStorage.setItem("reorder",JSON.stringify(orders[i]))
       })

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
  let orders = JSON.parse(localStorage.getItem("order")) || [];  
  for(let i=0;i<orders.length;i++){
    let temp = orders.filter((ele) => ele.ids.toString().includes(value) || ele.sku.toLowerCase().includes(value.toLowerCase())); 
    uimaker(temp);
  }
}
 
  document.querySelector("#orderSearch").addEventListener("input", (e) => {
   let valuesearch= e.target.value 
   console.log(valuesearch);
   
   search(valuesearch)
  })

  //sorting by date and time
  document.getElementById("sortby").addEventListener("input", () => { 
    let sort = document.getElementById("sortby").value;
    console.log(sort);
  
    if (sort === "Latest") {
      orders.sort((a, b) => {
        return new Date(b.now) - new Date(a.now);
      });
    } 
  
    if (sort === "Oldest") {
      orders.sort((a, b) => {
        return new Date(a.now) - new Date(b.now); 
      });
    }
  
    uimaker(orders); 
  });
  
//filter by status

document.getElementById("statusfilter").addEventListener("input", () => { 
  let filter = document.getElementById("statusfilter").value;

    if (filter === "all") {
      uimaker(orders); 
    } else {
      let temp = orders.filter((ele) => ele.status.toString() === filter.toString());  
      uimaker(temp)
    }
});


//filter by payment method

    document.getElementById("paymentmethod").addEventListener("input", () => { 
    let filter = document.getElementById("paymentmethod").value;
    console.log(orders);
    
    if (filter === "all") {
      uimaker(orders); 
    } else {
      let temp = orders.filter((ele) => ele.payment.toString() === filter.toString());
      console.log(temp);
      
      uimaker(temp)
    }
  });


  
  //search


  let data=JSON.parse(localStorage.getItem("allproducts"))

  const searchv = (value) => {
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
    searchv(value);
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