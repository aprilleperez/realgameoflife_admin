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
                        <Label traits={avatar.trait1} />
                        <Label traits={avatar.trait2} />
                        <Label traits={avatar.trait3} />
                        <Label traits={avatar.trait4} />
                        <Label traits={avatar.trait5} />
                        {console.log(avatar)}
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