import React, { useContext } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { StudentContext } from '../App';

export default function SubmitButton() {
  const { handleStudentAdd } = useContext(StudentContext);

  return (
    <Row style={{ textAlign: 'center' }}>
      <Col>
        <Button
          className='mb-5'
          variant='primary'
          onClick={() => handleStudentAdd()}
        >
          Add Student
        </Button>
      </Col>
    </Row>
  );
}
