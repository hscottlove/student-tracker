import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Card from './Card';

export default function CardList({ students }) {
  return (
    <>
      <Container>
        <Row className='justify-content-md-center gap-3'>
          {students.map((student) => {
            return <Card key={student.id} {...student} />;
          })}
        </Row>
      </Container>
    </>
  );
}
