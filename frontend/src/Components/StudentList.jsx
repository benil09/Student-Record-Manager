import { useEffect, useState } from "react";
import axios from "axios";

export default function StudentList({ refresh }) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/students").then((res) => {
      setStudents(res.data);
    });
  }, [refresh]);

  return (
    <div className="mt-8 max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Student Records</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Age</th>
            <th className="border p-2">Branch</th>
            <th className="border p-2">CGPA</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.student_id} className="text-center">
              <td className="border p-2">{s.student_id}</td>
              <td className="border p-2">{s.name}</td>
              <td className="border p-2">{s.age}</td>
              <td className="border p-2">{s.branch}</td>
              <td className={`border p-2 ${s.cgpa<7.00?"bg-red-200":""}`}>{s.cgpa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}