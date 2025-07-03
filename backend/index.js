import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import studentRoutes from "./routes/students.js";

const app = express();
const PORT = 5000;

app.use(cors( {
  origin:["http://localhost:5174","http://localhost:5173"] , // Allow requests from the frontend
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)

}));
app.use(bodyParser.json());

app.use("/students", studentRoutes);



app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});