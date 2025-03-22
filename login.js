function validateLoginForm(event) {
    event.preventDefault();

    let email = document.getElementById('username').value;
    let password = document.getElementById('password').value;
  
    if (email === "" || password === "") {
      alert("Both email/username and password are required.");
      return;
    }
  
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
  }
  
  // Password visibility toggle functionality
  function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const passwordIcon = document.getElementById('toggle-password-icon');
    
    if (passwordField.type === "password") {
      passwordField.type = "text"; // Show the password
      passwordIcon.src = "./PHOTO/eye-open.png"; // Change to open eye icon
    } else {
      passwordField.type = "password"; // Hide the password
      passwordIcon.src = "./PHOTO/eye-closed.png"; // Change to closed eye icon
    }
  }
  
  // Adding event listeners to the form and password icon
  document.addEventListener('DOMContentLoaded', () => {
    // Handle form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', validateLoginForm);
  
    // Handle password visibility toggle
    const passwordToggleIcon = document.getElementById('toggle-password-icon');
    passwordToggleIcon.addEventListener('click', togglePasswordVisibility);
  });
  