import { useState } from "react";
import axios from "axios";

export default function StudentForm({ onStudentAdded }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    branch: "",
    cgpa: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/students/add", formData);
      setFormData({ name: "", age: "", branch: "", cgpa: "" });
      onStudentAdded();
    } catch (error) {
      console.error("Axios error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md p-6 rounded-lg space-y-4 w-full max-w-md mx-auto"
    >
      <h2 className="text-xl font-semibold text-center">Add Student</h2>
      {["name", "age", "branch", "cgpa"].map((field) => (
        <input
          key={field}
          name={field}
          type={field === "age" || field === "cgpa" ? "number" : "text"}
          placeholder={field.toUpperCase()}
          value={formData[field]}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      ))}
      <button
        type="submit"
        className="bg-violet-500 hover:bg-violet-600 cursor-pointer transition-colors duration-200 text-white w-full p-2 rounded"
      >
        Add Student
      </button>
    </form>
  );
}