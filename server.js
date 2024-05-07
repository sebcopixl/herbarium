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
  password: "N/",
  database: "herbarium",
});

// Connect to MySQL database
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database");
});

// API endpoint to retrieve plants matching the search term
app.get("/plants", (req, res) => {
  const searchTerm = req.query.search;

  // Query the database to retrieve plants matching the search term
  connection.query(
    "SELECT * FROM plants WHERE common_name LIKE ? OR scientific_name LIKE ?",
    [`%${searchTerm}%`, `%${searchTerm}%`],
    (err, results) => {
      if (err) {
        console.error("Error retrieving plants from database: " + err);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }
      res.json(results); // Send plant data as JSON response
    }
  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
