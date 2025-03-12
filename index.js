let employee = [];


// function deleteall(){
// let tableBody = document.getElementById("tablebody");
// tableBody.innerHTML = "";
// }

// function uimaker() {
// let tableBody = document.getElementById("tablebody");
// tableBody.innerHTML = "";

// employee.map((ele,i) => {
// let td1 = document.createElement("td");
// td1.innerHTML = ele.name;
// let td2 = document.createElement("td");
// td2.innerHTML = ele.surname;
// let td3 = document.createElement("td");
// td3.innerHTML = ele.contact;
// let td4 = document.createElement("td");
// td4.innerHTML = ele.acontact;
// let td5 = document.createElement("td");
// td5.innerHTML = ele.email;
// let td6 = document.createElement("td");
// td6.innerHTML =
//   ele.address.ad1 + ", " + ele.address.ad2 + ", " + ele.address.ad3;
// let td7 = document.createElement("td");
// td7.innerHTML = ele.landmark;
// let td8 = document.createElement("td");
// td8.innerHTML = ele.pincode;
// let td9 = document.createElement("td");
// td9.innerHTML = ele.city;
// let td10 = document.createElement("td");
// td10.innerHTML = ele.state;
// let td11 = document.createElement("td");
// td11.innerHTML = ele.password;
// let td12=document.createElement("td");
// td12.innerHTML=ele.username;
// let td13=document.createElement("td");
// td13.innerHTML=ele.passwordtype;
// let btn = document.createElement("button");
// btn.addEventListener("click",()=>{
//   employee.splice(i, 1);
//   uimaker();
// })
// btn.innerHTML = "delete";
// let tr = document.createElement("tr");
// tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9, td10, td11 , td13 , td12, btn);

// // document.getElementById("tablebody").append(tr);
// });
// }

const errordetail=(id,msg)=>{
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

document
.getElementById("myForm")
.addEventListener("submit", function customer(e) {
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
let ad1 = getvalue("adress1");
let ad2 = getvalue("adress2");
let ad3 = getvalue("adress3");
let address = {
  ad1,
  ad2,
  ad3,
};
let rpassword = getvalue("rpassword");

let username=name.substring(0, 3).toLowerCase() + surname.substring(0, 3).toLowerCase() +  contact.substring(contact.length - 4); 


let easypasswordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,8}$/;
let mediumPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/-]).{9,12}$/;
let strongpasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/-]).{13,}$/;
let nameRegex = /^[A-Za-z\s]{2,}$/;
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let cityRegex = /^[A-Za-z\s\-]+$/;



// 1. Validate Name
if (!nameRegex.test(name)) {
  errordetail("errorname", "Please enter a valid name.");
  document.getElementById("name").setAttribute("class", "failed"); 
  return;
}else{
  document.getElementById("name").setAttribute("class", "passed");
}

// 2. Validate Surname
if (!nameRegex.test(surname)) {
  errordetail("errorsurname", "Please enter a valid surname.");
  document.getElementById("surname").setAttribute("class", "failed"); 
  return;
}else{
  document.getElementById("surname").setAttribute("class", "passed");
}

// 3. Validate Contact and alternative
if (contact.length < 10 || contact.length > 10) {
  errordetail("errorcontact", "Please enter a valid contact number");
  document.getElementById("mobile number").setAttribute("class", "failed"); 
  return;
}else{
  document.getElementById("mobile number").setAttribute("class", "passed");
}


if(!acontact.length==0 || !acontact.length >=10){
if (acontact.length < 10 || acontact.length > 10) {
  errordetail("erroralternative", "Please enter a valid number");
  document.getElementById("alternative number").setAttribute("class", "failed"); 
  return;
}else{
  document.getElementById("alternative number").setAttribute("class", "passed");
}}

//contact and alternative contact not same

if(contact == acontact){
  errordetail("erroralternative", "ALTERNATIVE CONTACT NO. should not be same as CONTACT NO.");
  document.getElementById("alternative number").setAttribute("class", "failed"); 
  return;
}

// 4. Validate Email
if (!emailRegex.test(email)) {
  errordetail("erroremail", "Please enter a valid email");
  document.getElementById("email").setAttribute("class", "failed"); 
  return;
}else{
  document.getElementById("email").setAttribute("class", "passed");
}

// 5. Validate Pincode
if (pincode.length < 6 || pincode.length > 6) {
  errordetail("errorpincode", "Please enter a valid pincode number");
  document.getElementById("pincode").setAttribute("class", "failed"); 
  return;
}else{
  document.getElementById("pincode").setAttribute("class", "passed");
}

// 6. Validate City
if (!cityRegex.test(city)) {
  errordetail("errorcity", "Please enter a valid city name");
  document.getElementById("city").setAttribute("class", "failed"); 
  return;
}else{
  document.getElementById("city").setAttribute("class", "passed");
}

// 7. Validate State
if (!cityRegex.test(state)) {
  errordetail("errorstate", "Please enter a valid state name");
  document.getElementById("state").setAttribute("class", "failed"); 
  return;
}else{
  document.getElementById("state").setAttribute("class", "passed");
}

// 8. Validate Password
if (easypasswordregex.test(password)) {
passwordtype = "Easy";
document.getElementById("password").setAttribute("class", "passed"); 
} else if (mediumPasswordRegex.test(password)) {
passwordtype = "Medium";
document.getElementById("password").setAttribute("class", "passed"); 
} else if (strongpasswordRegex.test(password)) {
passwordtype = "Strong";
document.getElementById("password").setAttribute("class", "passed"); 
} else {
document.getElementById("password").setAttribute("class", "failed"); 
errordetail("errorpassword", "Your password should be at least 5 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
return;
}


if (easypasswordregex.test(password)) {
   errordetail("errorpassword", "your password is easy to guess");
} else if (mediumPasswordRegex.test(password)) {
   errordetail("errorpassword", "your password is medium strength");
} else if (strongpasswordRegex.test(password)) {
   errordetail("errorpassword","your password is strong strength");
} 

//password and retype password check
if (password!== rpassword) {
  errordetail("errorretype", "RETYPE YOUR PASSWORD do not match with CREATE YOUR PASSWORD.");
  document.getElementById("rpassword").setAttribute("class", "failed"); 
  return;
}else{
  document.getElementById("rpassword").setAttribute("class", "passed");
}


let detail = {
  name: name,
  surname: surname,
  contact: contact,
  acontact: acontact,
  email: email,
  address: address,
  landmark: landmark,
  pincode: pincode,
  city: city,
  state: state,
  password: password,
  passwordtype: passwordtype,
  username:username
};

employee.push(detail);
// uimaker();

alert(`You have successfully submitted your data as a new employee. Your username is: ${username}`);
});