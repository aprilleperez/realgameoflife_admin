import React, { Component } from "react";
import '../style.css';
import Form from 'react-bootstrap/Form';
///////////////////////////////////////////////////////////////////////////////////////////////////

// TODO: ADD IN FUNCTION TO LINK TO GAME INSTANCE

function Dropdown(props) {
    return (
        <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Control as="select">
            <option>{props.text} 1</option>
            <option>{props.text} 2</option>
            <option>{props.text} 3</option>
            <option>{props.text} 4</option>
            <option>{props.text} 5</option>
          </Form.Control>
        </Form.Group>
      </Form>
    )
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default Dropdown;