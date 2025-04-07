const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const studentRoutes = require("./routes/students.js");

const app = express();
const PORT = 5000;

app.use(cors( {
  origin: "http://localhost:5173", // Allow requests from the frontend
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)

}));
app.use(bodyParser.json());

app.use("/students", studentRoutes);



app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});