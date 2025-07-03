import dotenv from "dotenv";
import mysql from "mysql";
dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER, // Use your DB user
  password: process.env.DB_PASSWORD, // Use your DB password if any
  database: process.env.DB_NAME, // Make sure this matches your MySQL DB
});

db.connect((err) => {
  if (err) throw err;
  console.log("✅ MySQL Connected");
});

export default db; // Export the connection object
