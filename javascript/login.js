let data=JSON.parse(localStorage.getItem("allproducts"))


const uimaker = (data) => {
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
        <img src="${item.image1}" alt="${item.title}" />
        <button>Buy Now</button>
      </div>
    `;
  }); 
};


let employee = JSON.parse(localStorage.getItem("userdata")) || [];
console.log(employee);

document.getElementById("loginform").addEventListener('submit', (event) => {
  event.preventDefault();

  let data = {
    email: document.getElementById("username").value,
    password: document.getElementById("password").value
  };

  let userData = isExist(data.email, data.email, data.email);

  console.log(userData);
  if (userData.found) {
 
    if (userData.user.password === data.password) {
      alert("Login SuccessFully...");
    } else {
      let userChoice=window.confirm("oops!!, your password is incorrect. forgot password ??? \nClick 'OK' to Forget Password or\nClick 'Cancel' to try again");
      if(userChoice){
        document.getElementById("container").style.display = "block";
      } 
    }
  } else {
    let userChoice=window.confirm("Sorry!!! You have not account.......!!\nClick 'OK' to create new account or\n'Cancel' to you want to add valid email or mobilenumber or username.")
    if(userChoice){
      window.open('../pages/create new account.html')
    }
  
  }
});

const isExist = (contact, username, email) => {
  let isUser = employee.find((user) => user.contact === contact || user.username === username || user.email === email);


  if (isUser) {
    return { found: true, user: isUser };
  } else {
    return { found: false, user: null };
  }
}

const forgotdiv=(event)=>{
  event.preventDefault();
  document.getElementById("container").style.display = "block";
}

const loginpage=()=>{
  document.getElementById("container").style.display = "none";
}




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