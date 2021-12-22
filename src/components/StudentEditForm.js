import React, { useContext } from 'react';
import { Form, Row, Col, Container } from 'react-bootstrap';
import { StudentContext } from '../App';

export default function StudentForm({ student }) {
  const { handleStudentChange } = useContext(StudentContext);

  function handleChange(changes) {
    handleStudentChange(student.id, { ...student, ...changes });
  }

  return (
    <Container>
      <Form className='mb-5'>
        <Row className='mb-3'>
          <Form.Group as={Col} htmlFor='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={(e) => handleChange({ name: e.target.value })}
              type='text'
              name='name'
              id='name'
              value={student.name}
              placeholder='Full name'
            />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridImage'>
            <Form.Label>Image</Form.Label>
            <Form.Control
              onChange={(e) => handleChange({ image: e.target.value })}
              placeholder='Paste URL'
            />
          </Form.Group>
        </Row>

        <Row className='mb-3'>
          <Form.Group as={Col} htmlFor='phone'>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              onChange={(e) => handleChange({ phone: e.target.value })}
              type='number'
              name='phone'
              id='phone'
              value={student.phone}
            />
          </Form.Group>

          <Form.Group as={Col} htmlFor='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={(e) => handleChange({ email: e.target.value })}
              type='email'
              name='email'
              id='email'
              value={student.email}
            />
          </Form.Group>

          <Form.Group as={Col} htmlFor='grade'>
            <Form.Label>Grade</Form.Label>
            <Form.Control
              onChange={(e) => handleChange({ grade: e.target.value })}
              type='number'
              name='grade'
              id='grade'
              value={student.grade}
            />
          </Form.Group>
        </Row>

        <Form.Group className='mb-3' htmlFor='notes'>
          <Form.Label>Notes</Form.Label>
          <Form.Control
            onChange={(e) => handleChange({ notes: e.target.value })}
            style={{ resize: 'none' }}
            name='notes'
            id='notes'
            value={student.notes}
            as='textarea'
            rows={3}
          />
        </Form.Group>
      </Form>
    </Container>
  );
}
