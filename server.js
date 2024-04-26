const express = require("express");
const mysql = require("mysql");
const cors = require("cors"); // Import the cors package

const app = express();

// Enable CORS middleware
app.use(cors());

// MySQL database connection configuration
const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "Northface71217/",
  database: "herbarium",
});

// Connect to MySQL database
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database");
});

// API endpoint to retrieve all plants
app.get("/plants", (req, res) => {
  // Query the database to retrieve all plant data
  connection.query("SELECT * FROM plants", (err, results) => {
    if (err) {
      console.error("Error retrieving plants from database: " + err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    res.json(results); // Send plant data as JSON response
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
