import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './components/CardList';
import NavBar from './components/NavBar';
import AddStudentButton from './components/AddStudentButton';
import CloseStudentButton from './components/CloseStudentButton';
import StudentEditForm from './components/StudentEditForm';
import { v4 as uuidv4 } from 'uuid';
import './css/App.css';

export const StudentContext = React.createContext();

function App() {
  const [selectedStudentId, setSelectedStudentId] = useState();
  const [students, setStudents] = useState(data);
  const [search, setSearch] = useState('');

  const selectedStudent = students.find((student) => {
    return student.id === selectedStudentId;
  });

  const filterStudents = students.filter((student) => {
    return student.name.toLowerCase().includes(search.toLowerCase());
  });

  const studentContextValue = {
    handleStudentAdd,
    handleStudentDelete,
    handleStudentSelect,
    handleStudentChange,
    handleSearchChange,
  };

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  function handleStudentSelect(id) {
    setSelectedStudentId(id);
  }

  function handleStudentAdd() {
    const newStudent = {
      id: uuidv4(),
      name: '',
      image: 'https://freesvg.org/img/abstract-user-flat-4.png',
      email: '',
      phone: '',
    };

    setSelectedStudentId(newStudent.id);
    setStudents([...students, newStudent]);
  }

  function handleStudentChange(id, student) {
    const newStudents = [...students];
    const index = newStudents.findIndex((s) => s.id === id);
    newStudents[index] = student;
    setStudents(newStudents);
  }

  function handleStudentDelete(id) {
    setStudents(students.filter((student) => student.id !== id));
  }

  return (
    <StudentContext.Provider value={studentContextValue}>
      <NavBar />
      {!selectedStudent ? <AddStudentButton /> : <CloseStudentButton />}
      {selectedStudent && <StudentEditForm student={selectedStudent} />}
      <CardList students={filterStudents} />
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
    grade: 91.3,
    notes: 'Schedual a meeting Monday to talk about grades.',
  },
  {
    id: 2,
    name: 'Amanda Love',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    email: 'amanda@gmail.com',
    phone: 9259496020,
    grade: 95,
    notes: 'Ask about project outline.',
  },
  {
    id: 3,
    name: 'Jim Jones',
    image:
      'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    email: 'jimjones77@gmail.com',
    phone: 7136476020,
    grade: 85.4,
    notes: 'Email extra credit opportunities.',
  },
];

export default App;
