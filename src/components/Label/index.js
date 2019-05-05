import React from "react";
import { Row, Container } from '../components/Grid';

function Label(props) {
    return (
        <Container fluid>
            <Row>
                <span>{props}</span>
            </Row>
        </Container>
    )
}

export default Label;