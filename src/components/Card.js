import React, { useContext } from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { StudentContext } from '../App';

export default function CardList({ id, name, email, phone }) {
  const { handleStudentDelete } = useContext(StudentContext);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant='top'
        src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Schedual a meeting Monday to talk about grades.</Card.Text>
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
