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
                        // changed value from props.text to props.traitName @12:40 5/11/19
                        //change value from props.traitName to props.text @ 10:37 5/28/19 or else everything was 
                        // barf on create questions
                        type="text" name={props.traitNumber} placeholder={props.placeholder} value={props.text} onChange={props.onChange} disabled={props.disabled} />
                </Form.Group>

            </Form>

        </Container>
    )
}

export default Label;




