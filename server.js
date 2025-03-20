const express = require('express');
const bodyParser = require('body-parser');
const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Endpoint to receive form data and save it in an Excel file
app.post('/submit', (req, res) => {
  // Extract data from the form submission
  const { name, surname, contact, acontact, email, address, landmark, pincode, city, state, password, passwordtype, username } = req.body;

  // Prepare the data in an array (Excel format)
  const employeeData = [
    {
      name,
      surname,
      contact,
      acontact,
      email,
      address: JSON.stringify(address), // Convert address object to string for Excel
      landmark,
      pincode,
      city,
      state,
      password,
      passwordtype,
      username
    }
  ];

  // Define the file path where the Excel file will be saved
  const filePath = path.join(__dirname, 'employee_data.xlsx');

  let wb;
  // Check if file already exists
  if (fs.existsSync(filePath)) {
    wb = XLSX.readFile(filePath); // Read the existing file
  } else {
    wb = XLSX.utils.book_new(); // Create a new workbook if the file doesn't exist
  }

  // Convert the employee data to a worksheet
  const ws = XLSX.utils.json_to_sheet(employeeData);

  // If the file exists, append to the sheet
  if (wb.Sheets['Employees']) {
    XLSX.utils.sheet_add_json(wb.Sheets['Employees'], employeeData, { skipHeader: true, origin: -1 });
  } else {
    // If no sheet exists, create one
    XLSX.utils.book_append_sheet(wb, ws, 'Employees');
  }

  // Write the workbook to the file
  XLSX.writeFile(wb, filePath);

  // Respond with a success message
  res.status(200).send('Data saved successfully!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
