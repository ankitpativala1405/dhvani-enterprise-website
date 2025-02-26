let dataStore = []; // Array to store the data before exporting

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

 
  let firstname = document.getElementById('NAME').value;
  let surname=document.getElementById('SURNAME').value;
  let contact = document.getElementById('mobile number').value;
  let scontact = document.getElementById('alternative number').value;
  let email = document.getElementById('email').value;
  let ad1 = document.getElementById('ad1').value;
  let ad2 = document.getElementById('ad2').value;
  let ad3 = document.getElementById('ad3').value;
  let landmark = document.getElementById('landmark').value;
  let pincode = document.getElementById('pincode').value;
  let city = document.getElementById('city').value;
  let state = document.getElementById('state').value;
  let password= document.getElementById('password').value;


  let saddress = {
    ad1,
    ad2,
    ad3,
  };

  let employeedetail={
      Name:firstname,
      Surname:surname,
      Contact:contact,
      alternativecontact:scontact,
      Email: email,
      address:saddress,
      Landmark:landmark,
      Pincode:pincode,
      City:city,
      State:state,
      Password:password
  }

 
  dataStore.push(employeedetail);

  // Show download button
  // document.getElementById('downloadBtn').style.display = 'inline-block';

  // Reset the form
  // document.getElementById('myForm').reset();
});