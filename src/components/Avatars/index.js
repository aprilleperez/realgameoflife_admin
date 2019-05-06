import React from "react";
import { Col, Row, Container } from '../components/Grid';
import { Header, SubHeader } from '../components/Header';
import Card from "../components/Card"
import Label from "../components/Label"

function Avatars() {
    return (
        <Container fluid>
            <Header />
            <SubHeader />
            <Row>
                <Col size="md-4">
                    <Card>
                    </Card>
                </Col>
                <Col size="md-4">
                    <Label></Label>
                </Col>

            </Row>

        </Container>
    )
}

export default Avatars;