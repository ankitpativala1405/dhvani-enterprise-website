let dataStore = []; // Array to store the data before exporting

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  let firstname = document.getElementById('NAME').value;
  let surname=document.getElementById('SURNAME').value;
  let contact = document.getElementById('mobile number').value;
  let scontact = document.getElementById('alternative number').value;
  let email = document.getElementById('email').value;
  let saddress = document.getElementById('saddress').value;
  let landmark = document.getElementById('landmark').value;
  let pincode = document.getElementById('pincode').value;
  let city = document.getElementById('city').value;
  let state = document.getElementById('state').value;
  let password= document.getElementById('password').value;

  // Store the data in an array
  dataStore.push({ Name: name,Surname:surname,Contact:contact,alternativecontact:scontact, Email: email,address:saddress,Landmark:landmark,Pincode:pincode,City:city,State:state,Password:password });

  // Show download button
  document.getElementById('downloadBtn').style.display = 'inline-block';

  // Reset the form
  document.getElementById('myForm').reset();
});

// Function to generate Excel file and download it
document.getElementById('downloadBtn').addEventListener('click', function() {
  // Create a workbook and add data
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(dataStore); // Convert array to sheet
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  // Write the Excel file and trigger the download
  XLSX.writeFile(wb, 'data.xlsx');
});