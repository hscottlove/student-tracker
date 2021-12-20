import React from 'react';
import { Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap';
import logo from '../images/logo.png';

export default function NavBar({ handleSearch }) {
  return (
    <Navbar bg='light' expand='lg' className='mb-5'>
      <Container>
        <Navbar.Brand href='#'>
          <img
            alt=''
            src={logo}
            width='50'
            height='50'
            className='d-inline-block align-center'
          />{' '}
          Student Tracker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href='#action1'>Home</Nav.Link>
            <Nav.Link href='#action2'>Link</Nav.Link>
          </Nav>
          <Form className='d-flex'>
            <FormControl
              type='search'
              placeholder='Search student'
              className='me-2'
              aria-label='Search'
              onChange={(e) => handleSearch(e)}
            />
            {/* <Button variant='outline-success'>Search</Button> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
