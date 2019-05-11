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
        <Form.Control as="select" value={props.value} onChange={props.onChange}>
          {props.options.map(option => (
            <option>{option} </option>
          ))}
        </Form.Control>

      </Form.Group>

    </Form>
  )
}

export function QuestionDropdown(props) {
  const { qProps, t1Props, t2Props } = props;
  return (
    <Container fluid>
      <Row>
        <Col size="sm-1">
          Edit:
      </Col>

        <Col size="sm-3">
          <Dropdown {...qProps} />
        </Col>

        <Col size="sm-2">
          Weighted By:
      </Col>

        <Col size="sm-2">
          <Dropdown {...t1Props} />
        </Col>

        <Col size="sm-2">
          <Dropdown {...t2Props} />
        </Col>
      </Row>
    </Container>
  )
}


///////////////////////////////////////////////////////////////////////////////////////////////////
// export default Dropdown;