const express = require("express");
const mysql = require("mysql2"); // Use mysql2 package instead of mysql
const cors = require("cors");

const app = express();

// Allow cross-origin requests
app.use(cors());

// Configure CSP
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "default-src 'self' img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline';");
  next();
});

// Configure MySQL connection
const connection = mysql.createConnection({
  host: "db",
  port: "3306",
  user: "root",
  password: "Ichimonji",
  database: "herbarium",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database");
});

app.get("/", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

app.get("/plants", (req, res) => {
  const searchTerm = req.query.search;

  connection.query(
    "SELECT * FROM plants WHERE common_name LIKE ? OR scientific_name LIKE ?",
    [`%${searchTerm}%`, `%${searchTerm}%`],
    (err, results) => {
      if (err) {
        console.error("Error retrieving plants from database: " + err);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }
      res.json(results);
    }
  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
