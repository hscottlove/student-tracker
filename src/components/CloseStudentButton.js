import React, { useContext } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { StudentContext } from '../App';

export default function CloseStudentButton() {
  const { handleStudentSelect } = useContext(StudentContext);

  return (
    <Row style={{ textAlign: 'center' }}>
      <Col>
        <Button
          className='mb-5'
          variant='danger'
          onClick={() => handleStudentSelect(undefined)}
        >
          Close
        </Button>
      </Col>
    </Row>
  );
}
