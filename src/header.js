import React, { Component } from 'react';
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import '../node_modules/bootstrap/dist/js/bootstrap.js';
 //import Popper from 'popper.js'
 import {Button,Navbar,Nav,NavDropdown} from 'react-bootstrap'
 import Form from 'react-bootstrap/Form'
 import FormControl from 'react-bootstrap/FormControl'


class Header extends Component {
  render() {
    return (


<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>






    );
  }
}

export default Header;