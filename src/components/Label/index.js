import React from "react";
import { Row, Container } from "../Grid"

// We can render all the traits with just one Label, but we'll need to pass all the correct props

function Label(props) {
    return (
        <Container fluid>
            <Row>
                <p>Trait 1</p>
            </Row>
            <Row>
                <p>Trait 2</p>
            </Row>
            <Row>
                <p>Trait 3</p>
            </Row>
            <Row>
                <p>Trait 4</p>
            </Row>
            <Row>
                <p>Trait 5</p>
            </Row>
        </Container>
    )
}

export default Label;