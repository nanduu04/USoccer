import React from 'react'
//import {Link} from 'react-router-dom'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

function NavBar(){
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">USoccer</Navbar.Brand>
        <Nav className="mr-auto">
          {/* <Nav.Link href="/find">Find</Nav.Link> */}
          <Nav.Link href="/events">Events</Nav.Link>
          <Nav.Link href="/communication">Chat</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    );
}

export default NavBar;
