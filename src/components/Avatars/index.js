import React from "react";
import { Col, Row, Container } from '../Grid';
import { Header, SubHeader } from '../Header';
import Card from "../Card"
import Label from "../Label"
import Sliders from "../Sliders"

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
                <Col size="md-4">
                    <Sliders>

                    </Sliders>
                </Col>

            </Row>

        </Container>
    )
}



export default Avatars;