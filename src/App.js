import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './components/CardList';
import NavBar from './components/NavBar';
import StudentForm from './components/StudentForm';
import { v4 as uuidv4 } from 'uuid';

export const StudentContext = React.createContext();

function App() {
  // const [selectedStudentId, setSelectedStudentId] = useState();
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
      image: 'https://freesvg.org/img/abstract-user-flat-4.png',
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
    image:
      'https://images.unsplash.com/photo-1618827840222-fcf8f42509c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    email: 'mgarcia@gmail.com',
    phone: 9256496486,
    notes: 'Schedual a meeting Monday to talk about grades.',
  },
  {
    id: 2,
    name: 'Amanda Love',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    email: 'amanda@gmail.com',
    phone: 9259496020,
    notes: 'Ask about project outline.',
  },
  {
    id: 3,
    name: 'Jim Jones',
    image:
      'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    email: 'jimjones77@gmail.com',
    phone: 7136476020,
    notes: 'Email extra credit opportunities.',
  },
];

export default App;
