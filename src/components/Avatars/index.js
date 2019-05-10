import React from "react";
import { Col, Row, Container } from '../Grid';
import { Header, SubHeader } from '../Header';
import Card from "../Card"
import Label from "../Label"
import { PointToggler2 } from "../PointToggler";

function Avatars(props) {
    return (
        <Container fluid>
            <Header />
            <SubHeader />
            {/* Map over the avatars object */}
            {props.avatars.map(avatar => (
                <Row>
                    <Col size="md-4">
                        <Card avatar={avatar.name} />
                    </Col>
                    <Col size="md-4">
                        <Label traitName={props.traitName.trait1} />
                        <Label traitName={props.traitName.trait2} />
                        <Label traitName={props.traitName.trait3} />
                        <Label traitName={props.traitName.trait4} />
                        <Label traitName={props.traitName.trait5} />

                    </Col>

                    <Col size="md-4">
                        <PointToggler2 traits={avatar.trait1} updater={props.updater} />
                        <PointToggler2 traits={avatar.trait2} updater={props.updater} />
                        <PointToggler2 traits={avatar.trait3} updater={props.updater} />
                        <PointToggler2 traits={avatar.trait4} updater={props.updater} />
                        <PointToggler2 traits={avatar.trait5} updater={props.updater} />

                    </Col>

                </Row>
            ))}
        </Container>
    )
}



export default Avatars;





