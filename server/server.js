const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "rcreate",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

// TESTIMONIALS route
app.get("/testimonials", (req, res) => {
  db.query(
    "SELECT id, rating, quote, author FROM testimonials ORDER BY id DESC",
    (err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results);
    }
  );
});

// BLOGS route (all blogs, no limit)
app.get("/blogs", (req, res) => {
  db.query(
    "SELECT id, title, category, excerpt, date FROM blogs ORDER BY id DESC",
    (err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results);
    }
  );
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});