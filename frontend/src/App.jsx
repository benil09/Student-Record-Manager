import { useState } from "react";
import StudentForm from "./Components/StudentForm";
import StudentList from "./Components/StudentList";

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleStudentAdded = () => setRefresh(!refresh);

  return (
    <div className="min-h-screen bg-purple-100 py-10 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-300 rounded-full opacity-40 blur-3xl"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-pink-300 rounded-full opacity-40 blur-3xl"></div>
      
      <h1 className="text-3xl font-bold text-center mb-10 text-violet-600 z-10 relative">
        Student Record Manager
      </h1>
      <div className="z-10 relative">
        <StudentForm onStudentAdded={handleStudentAdded} />
        <StudentList refresh={refresh} />
      </div>
    </div>
  );
}

export default App;