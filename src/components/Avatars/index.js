import React from "react";
import { Col, Row, Container } from '../Grid';
import { Header, SubHeader } from '../Header';
import Card from "../Card"
import Label from "../Label"
import Sliders from "../Sliders"

function Avatars(props) {
    return (
        <Container fluid>
            <Header />
            <SubHeader />
            {props.avatars.map(avatar => (
                <Row>
                    <Col size="md-4">
                        <Card avatar={avatar.name} />
                    </Col>
                    <Col size="md-4">
                        <Label traits={avatar.traits} />
                    </Col>
                    <Col size="md-4">
                        <Sliders>

                        </Sliders>
                    </Col>

                </Row>
            ))}
        </Container>
    )
}



export default Avatars;