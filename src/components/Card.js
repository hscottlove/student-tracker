import React, { useContext } from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { StudentContext } from '../App';

export default function CardList(props) {
  const { id, name, image, email, phone, notes, grade } = props;
  const { handleStudentDelete, handleStudentSelect } =
    useContext(StudentContext);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img style={{ height: '100%' }} src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <hr />
        <Card.Text>Notes: {notes}</Card.Text>
      </Card.Body>
      <ListGroup className='list-group-flush'>
        <ListGroupItem>Email: {email}</ListGroupItem>
        <ListGroupItem>Phone: {phone}</ListGroupItem>
        <ListGroupItem>Grade: {grade}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Button variant='primary' onClick={() => handleStudentSelect(id)}>
          Edit
        </Button>
        <Button variant='danger' onClick={() => handleStudentDelete(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}
