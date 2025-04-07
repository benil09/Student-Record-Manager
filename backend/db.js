const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",         // Use your DB user
  password: "@Nilkamal09.",         // Use your DB password if any
  database: "studentDB" // Make sure this matches your MySQL DB
});

db.connect((err) => {
  if (err) throw err;
  console.log("✅ MySQL Connected");
});

module.exports = db;  // Export the connection object