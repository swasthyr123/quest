


import React, { Component } from 'react';
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import '../node_modules/bootstrap/dist/js/bootstrap.js';
 import Popper from 'popper.js'
 import {Button,Navbar,Nav,NavDropdown} from 'react-bootstrap'
 import Form from 'react-bootstrap/Form'
 import FormControl from 'react-bootstrap/FormControl'


class Form_s extends Component {
  render() {
    return (


 <Form>
        <Form.group controlid="FormBasicEmail">
          <Form.label>Email address</Form.label>
          <Form.control type="email" placeholder="Enter email">
            <Form.text classname="text-muted">
              We'll never share your email with anyone else
            </Form.text>
          </Form.control></Form.group>
        <Form.group controlid="FormBasicPassword">
          <Form.label>Password</Form.label>
          <Form.control type="password" placeholder="Password">
          </Form.control></Form.group>
        <Form.group controlid="FormBasicChecbox">
          <Form.check type="checkbox" label="Check me out">
          </Form.check></Form.group>
        <button variant="primary" type="submit">
          Submit
        </button>
      </Form>







    );
  }
}

export default Form_s;





