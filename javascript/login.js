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
      window.open('./create new account.html')
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