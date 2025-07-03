import express from "express";
const router = express.Router();
import db from "../db.js";

router.get("/", (req, res) => {
  db.query("SELECT * FROM Students", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

router.post("/add", (req, res) => {
  const { student_id, name, age, branch, cgpa } = req.body;
  const sql = "INSERT INTO Students (student_id, name, age, branch, cgpa) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [student_id, name, age, branch, cgpa], (err, result) => {
    if (err) throw err;
    res.json({ message: "✅ Student added successfully!" });
  });
});

export default router // Export the router
