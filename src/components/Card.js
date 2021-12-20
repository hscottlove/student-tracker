import React, { useContext } from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { StudentContext } from '../App';

export default function CardList({ id, name, image, email, phone, notes }) {
  const { handleStudentDelete } = useContext(StudentContext);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' style={{ height: '100%' }} src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <hr />
        <Card.Text>Notes: {notes}</Card.Text>
      </Card.Body>
      <ListGroup className='list-group-flush'>
        <ListGroupItem>Email: {email}</ListGroupItem>
        <ListGroupItem>Phone: {phone}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Button variant='primary'>Edit</Button>
        <Button variant='danger' onClick={() => handleStudentDelete(id)}>
          Delete
        </Button>
        {/* <Card.Link href='#'>Edit</Card.Link>
        <Card.Link href='#'>Delete</Card.Link> */}
      </Card.Body>
    </Card>
  );
}
