import React from "react";
import { Col, Row, Container } from '../Grid';
import { Header, SubHeader } from '../Header';
import Card from "../Card"
import Label from "../Label"
import { PointToggler2 } from "../PointToggler";

let keys = ["trait1", "trait2", "trait3", "trait4", "trait5"];

function makeMePartial(avatar, traitName, val, fnOfAllThree) {
    return () => {
        fnOfAllThree(avatar, traitName, val);
    }
}

/*
<Label traitName={props.traitName.trait1} />
                            <Label traitName={props.traitName.trait2} />
                            <Label traitName={props.traitName.trait3} />
                            <Label traitName={props.traitName.trait4} />
                            <Label traitName={props.traitName.trait5} />
                            <PointToggler2 traits={avatar.trait1} updater={props.updater} />
                            <PointToggler2 traits={avatar.trait2} updater={props.updater} />
                            <PointToggler2 traits={avatar.trait3} updater={props.updater} />
                            <PointToggler2 traits={avatar.trait4} updater={props.updater} />
                            <PointToggler2 traits={avatar.trait5} updater={props.updater} />

*/

function Avatars(props) {
    return (
        <Container fluid>
            <Header />
            <SubHeader />
            {/* Map over the avatars object */}
            {props.avatars.map(avatar => {

                return (
                    <Row>
                        <Col size="md-4">
                            <Card avatar={avatar.name} onChange={props.onChange} />
                        </Col>
                        <Col size="md-4">
                            {keys.map(key =>
                                (<Label traitName={props.traitName[key]} />)
                            )}
                        </Col>

                        <Col size="md-4">
                            {keys.map(key => {
                                const increment = makeMePartial(avatar, key, avatar[key] + 1, props.updater)
                                const decrement = makeMePartial(avatar, key, avatar[key] - 1, props.updater)
                                return (<PointToggler2 traits={avatar[key]} plus={increment} minus={decrement} />)
                            })}

                        </Col>

                    </Row>
                )
            })}
        </Container>
    )
}



export default Avatars;





