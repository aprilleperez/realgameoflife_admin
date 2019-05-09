import React from "react";
import { Container } from "../Grid";
import Form from 'react-bootstrap/Form';

// We can render all the traits with just one Label, but we'll need to pass all the correct props

function Label(props) {
    return (
        <Container>
            {/* <form>
                <input className={props.className} type="text" name="trait" placeholder={props.text} />
            </form> */}
            {/* {this.props.traitNames.map(traitName => ( */}
            <Form>

                <Form.Group controlId="formBasicEmail" className="thisForm">

                    <Form.Control className={props.className}
                        type="text" name="trait" placeholder={props.text} value={props.traitName} />
                </Form.Group>

            </Form>
            {/* ))} */}
        </Container>
    )
}

export default Label;





{/* <form>
                <div className="form-group">
                    <label for="traits">Trait 1</label>

                </div>
            </form> */}