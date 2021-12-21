import React, { useContext } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import { StudentContext } from '../App';

export default function StudentForm({ selectedStudent }) {
  const { handleStudentAdd, handleStudentChange } = useContext(StudentContext);

  function handleChange(changes) {
    handleStudentChange(selectedStudent.id, { ...selectedStudent, ...changes });
  }
  return (
    <Container>
      <Form className='mb-5'>
        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridName'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={(e) => handleChange({ name: e.target.value })}
              type='text'
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
          <Form.Group as={Col} controlId='formGridPhone'>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              onChange={(e) => handleChange({ phone: e.target.value })}
              type='number'
            />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={(e) => handleChange({ email: e.target.value })}
              type='email'
            />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridNumber'>
            <Form.Label>Grade</Form.Label>
            <Form.Control
              onChange={(e) => handleChange({ grade: e.target.value })}
              type='number'
            />
          </Form.Group>
        </Row>

        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Notes</Form.Label>
          <Form.Control
            onChange={(e) => handleChange({ notes: e.target.value })}
            style={{ resize: 'none' }}
            as='textarea'
            rows={3}
          />
        </Form.Group>

        {/* <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridNumber'>
            <Form.Label>Grade</Form.Label>
            <Form.Control type='number' />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridNumber'>
            <Form.Label>GPA</Form.Label>
            <Form.Control type='number' />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridState'>
            <Form.Label>Quarter</Form.Label>
            <Form.Select defaultValue='Choose...'>
              <option>Q1</option>
              <option>Q2</option>
              <option>Q3</option>
              <option>Q4</option>
            </Form.Select>
          </Form.Group>
        </Row> */}

        <Button variant='primary' onClick={() => handleStudentAdd()}>
          Add Student
        </Button>
      </Form>
    </Container>
  );
}
