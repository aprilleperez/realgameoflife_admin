import React from "react";
import { Container } from "../Grid";
import Form from 'react-bootstrap/Form';

// We can render all the traits with just one Label, but we'll need to pass all the correct props

function Label(props) {
    return (
        <Container>

            <Form>

                <Form.Group controlId="formBasicEmail" className="thisForm">

                    <Form.Control className={props.className}
                        type="text" name={props.traitNumber} placeholder={props.text} value={props.traitName} onChange={props.onChange} />
                </Form.Group>

            </Form>

        </Container>
    )
}

export default Label;




