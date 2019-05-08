import React from "react";
import { Col, Row, Container } from '../Grid';
import { Header, SubHeader } from '../Header';
import Card from "../Card"
import Label from "../Label"
<<<<<<< HEAD
import Sliders from "../Sliders"
import {PointToggler2} from "../PointToggler";
=======
import PointToggler from "../PointToggler";
>>>>>>> 8de7a91705edd1aa94b5165af55bc683714d9ff4

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
<<<<<<< HEAD
                        <PointToggler2 traits={avatar.trait1} />
                        <PointToggler2 traits={avatar.trait2} />
                        <PointToggler2 traits={avatar.trait3} />
                        <PointToggler2 traits={avatar.trait4} />
                        <PointToggler2 traits={avatar.trait5} />
=======
                        {/* Grabbing the traits object and rendering each trait */}
                        <PointToggler traits={avatar.trait1} />
                        <PointToggler traits={avatar.trait2} />
                        <PointToggler traits={avatar.trait3} />
                        <PointToggler traits={avatar.trait4} />
                        <PointToggler traits={avatar.trait5} />
>>>>>>> 8de7a91705edd1aa94b5165af55bc683714d9ff4

                    </Col>

                </Row>
            ))}
        </Container>
    )
}



export default Avatars;





