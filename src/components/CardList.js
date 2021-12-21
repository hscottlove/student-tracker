import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Card from './Card';
// import { StudentContext } from '../App';

export default function CardList({ students }) {
  // const { handleStudentAdd } = useContext(StudentContext);

  return (
    <>
      <Container>
        {/* <Button
          className='mb-5'
          variant='primary'
          onClick={() => handleStudentAdd()}
        >
          Add Student
        </Button> */}

        <Row className='justify-content-center gap-4'>
          {students.map((student) => {
            return <Card key={student.id} {...student} />;
          })}
        </Row>
      </Container>
    </>
  );
}
