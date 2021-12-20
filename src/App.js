import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './components/CardList';
import NavBar from './components/NavBar';
import StudentForm from './components/StudentForm';
import { v4 as uuidv4 } from 'uuid';

export const StudentContext = React.createContext();

function App() {
  const [selectedStudentId, setSelectedStudentId] = useState();
  const [students, setStudents] = useState(data);
  const [search, setSearch] = useState('');

  const studentContextValue = {
    handleStudentAdd,
    handleStudentDelete,
  };

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleStudentAdd() {
    const newStudent = {
      id: uuidv4(),
      name: 'name test',
      email: 'email test',
      phone: 'number test',
    };
    // setSelectedStudentId(newStudent.id);
    setStudents([...students, newStudent]);
  }

  function handleStudentDelete(id) {
    setStudents(students.filter((student) => student.id !== id));
  }

  const handleFilter = students.filter((student) => {
    return student.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <StudentContext.Provider value={studentContextValue}>
      <NavBar handleSearch={handleSearch} />
      <StudentForm />
      <CardList students={handleFilter} />
    </StudentContext.Provider>
  );
}

const data = [
  {
    id: 1,
    name: 'Marcelo Garcia',
    email: 'mgarcia@gmail.com',
    phone: 9256496486,
  },
  {
    id: 2,
    name: 'Amanda Love',
    email: 'amanda@gmail.com',
    phone: 9259496020,
  },
  {
    id: 3,
    name: 'Jim Jones',
    email: 'jimjones77@gmail.com',
    phone: 7136476020,
  },
];

export default App;
