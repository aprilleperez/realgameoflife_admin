import React from "react";
import '../style.css';
import Form from 'react-bootstrap/Form';

import { Container, Row, Col } from '../Grid'
///////////////////////////////////////////////////////////////////////////////////////////////////

// TODO: ADD IN FUNCTION TO LINK TO GAME INSTANCE

export function Dropdown(props) {
  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlSelect1" className="thisForm">
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

export function QuestionDropdown(props) {
  return (
    <Container fluid>
      <Row>
        <Col size="sm-1">
          Edit:
      </Col>

        <Col size="sm-3">
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect2" className="thisForm">
              <Form.Control as="select">
                <option>{props.qtext} 1</option>
                <option>{props.qtext} 2</option>
                <option>{props.qtext} 3</option>
                <option>{props.qtext} 4</option>
                <option>{props.qtext} 5</option>
                <option>{props.qtext} 6</option>
                <option>{props.qtext} 7</option>
                <option>{props.qtext} 8</option>
                <option>{props.qtext} 9</option>
                <option>{props.qtext} 10</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>

        <Col size="sm-2">
          Weighted By:
      </Col>

        <Col size="sm-2">
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect2" className="thisForm">
              <Form.Control as="select">
                <option>{props.text} 1</option>
                <option>{props.text} 2</option>
                <option>{props.text} 3</option>
                <option>{props.text} 4</option>
                <option>{props.text} 5</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>

        <Col size="sm-2">
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect2" className="thisForm">
              <Form.Control as="select">
                <option>{props.text} 1</option>
                <option>{props.text} 2</option>
                <option>{props.text} 3</option>
                <option>{props.text} 4</option>
                <option>{props.text} 5</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}


///////////////////////////////////////////////////////////////////////////////////////////////////
// export default Dropdown;