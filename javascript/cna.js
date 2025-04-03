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

const errordetail = (id, msg) => {
  let error = document.createElement("p");
  error.innerHTML = msg;
  document.getElementById(id).append(error);
  return;
}

const getvalue = (id) => {
  return document.getElementById(id).value;
};

let username;
let passwordtype;

document.getElementById("myForm").addEventListener("submit", function customer(e) {
  e.preventDefault();
  let name = getvalue("name");
  let surname = getvalue("surname");
  let contact = getvalue("mobile number");
  let acontact = getvalue("alternative number");
  let email = getvalue("email");
  let landmark = getvalue("landmark");
  let pincode = getvalue("pincode");
  let city = getvalue("city");
  let state = getvalue("state");
  let password = getvalue("password");
  let homenumber = getvalue("adress1");
  let societyname = getvalue("adress2");
  let statename = getvalue("adress3");
  let rpassword = getvalue("rpassword");

  let username = name.substring(0, 3).toLowerCase() + surname.substring(0, 3).toLowerCase() + contact.substring(contact.length - 4);

  let easypasswordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,8}$/;
  let mediumPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/-]).{9,12}$/;
  let strongpasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/-]).{13,}$/;
  let nameRegex = /^[A-Za-z\s]{2,}$/;
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let cityRegex = /^[A-Za-z\s\-]+$/;

  if (!nameRegex.test(name)) {
    errordetail("errorname", "Please enter a valid name.");
    document.getElementById("name").setAttribute("class", "failed");  // This applies the 'failed' class
    return;
  } else {
    document.getElementById("name").setAttribute("class", "passed"); // You can apply a 'passed' class for valid fields if needed
  }

  // 2. Validate Surname
  if (!nameRegex.test(surname)) {
    errordetail("errorsurname", "Please enter a valid surname.");
    document.getElementById("surname").setAttribute("class", "failed");
    return;
  } else {
    document.getElementById("surname").setAttribute("class", "passed");
  }

  // 3. Validate Contact and alternative
  if (contact.length < 10 || contact.length > 10) {
    errordetail("errorcontact", "Please enter a valid contact number");
    document.getElementById("mobile number").setAttribute("class", "failed");
    return;
  } else {
    document.getElementById("mobile number").setAttribute("class", "passed");
  }

  // Alternative Contact validation
  if (acontact.length > 0 && (acontact.length < 10 || acontact.length > 10)) {
    errordetail("erroralternative", "Please enter a valid alternative number");
    document.getElementById("alternative number").setAttribute("class", "failed");
    return;
  } else {
    document.getElementById("alternative number").setAttribute("class", "passed");
  }

  // Alternative contact and contact should not be the same
  if (contact === acontact) {
    errordetail("erroralternative", "ALTERNATIVE CONTACT NO. should not be the same as CONTACT NO.");
    document.getElementById("alternative number").setAttribute("class", "failed");
    return;
  }

  // 4. Validate Email
  if (!emailRegex.test(email)) {
    errordetail("erroremail", "Please enter a valid email");
    document.getElementById("email").setAttribute("class", "failed");
    return;
  } else {
    document.getElementById("email").setAttribute("class", "passed");
  }

  // 5. Validate Pincode
  if (pincode.length !== 6) {
    errordetail("errorpincode", "Please enter a valid pincode number");
    document.getElementById("pincode").setAttribute("class", "failed");
    return;
  } else {
    document.getElementById("pincode").setAttribute("class", "passed");
  }

  // 6. Validate City
  if (!cityRegex.test(city)) {
    errordetail("errorcity", "Please enter a valid city name");
    document.getElementById("city").setAttribute("class", "failed");
    return;
  } else {
    document.getElementById("city").setAttribute("class", "passed");
  }

  // 7. Validate State
  if (!cityRegex.test(state)) {
    errordetail("errorstate", "Please enter a valid state name");
    document.getElementById("state").setAttribute("class", "failed");
    return;
  } else {
    document.getElementById("state").setAttribute("class", "passed");
  }

  // 8. Validate Password
  if (!easypasswordregex.test(password) && !mediumPasswordRegex.test(password) && !strongpasswordRegex.test(password)) {
    document.getElementById("password").setAttribute("class", "failed");
    errordetail("errorpassword", "Your password should be at least 5 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
    return;
  } else {
    document.getElementById("password").setAttribute("class", "passed");
    if (easypasswordregex.test(password)) {
      errordetail("errorpassword", "Your password is easy to guess");
    } else if (mediumPasswordRegex.test(password)) {
      errordetail("errorpassword", "Your password is medium strength");
    } else if (strongpasswordRegex.test(password)) {
      errordetail("errorpassword", "Your password is strong");
    }
  }

  // 9. Password and Retype Password Check
  if (password !== rpassword) {
    errordetail("errorretype", "RETYPE YOUR PASSWORD does not match with CREATE YOUR PASSWORD.");
    document.getElementById("rpassword").setAttribute("class", "failed");
    return;
  } else {
    document.getElementById("rpassword").setAttribute("class", "passed");
  }

  let detail = {
    name: name,
    surname: surname,
    contact: contact,
    acontact: acontact,
    email: email,
    homenumber:homenumber,
    societyname:societyname,
    statename:statename,
    landmark: landmark,
    pincode: pincode,
    city: city,
    state: state,
    password: password,
    passwordtype: passwordtype,
    username: username
  };

  if(isExist(detail.contact)){
    let userChoice = window.confirm("Sorry!!!...   You have an already account....!! \nClick 'OK' to login or\n'Cancel' to try again with another contact number.");
      if(userChoice){
        window.open('./login.html')
      }
  }
  else{
  alert(`You have successfully submitted your data as a new user. Your username is: ${username}`);
  employee.push(detail);
  localStorage.setItem("userdata", JSON.stringify(employee));
}
});
  const isExist=(contact)=>{
    let isUSer= employee.find((user)=>parseFloat(user.contact)===Number(contact))

    if (isUSer){
      return true;
    }else{
      return false;
    }
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