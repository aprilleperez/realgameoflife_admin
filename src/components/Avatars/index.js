import React from "react";
import { Col, Row, Container } from '../Grid';
import { Header, SubHeader } from '../Header';
import Card from "../Card"
import Label from "../Label"
import { PointToggler2 } from "../PointToggler";
import { partial } from "../../utils/partials"

let keys = ["trait1", "trait2", "trait3", "trait4", "trait5"];

// function makeMePartial(avatar, traitName, val, fnOfAllThree) {
//     return () => {
//         fnOfAllThree(avatar, traitName, val);
//     }
// }



function Avatars(props) {
    return (
        <Container fluid>
            <Header />
            <SubHeader />
            {/* Map over the avatars object */}
            {props.avatars.map((avatar, i) => {

                return (
                    <Row>
                        <Col size="md-4">
                            <Card avatar={avatar} avatarIndex={i} handleChange={props.handleChange} />
                        </Col>
                        <Col size="md-4">
                            {keys.map(key =>
                                (<Label traitName={props.traitName[key]} />)
                            )}
                        </Col>

                        <Col size="md-4">
                            {keys.map(key => {
                                const increment = partial(props.updater, avatar, key, avatar[key] + 1)
                                const decrement = partial(props.updater, avatar, key, avatar[key] - 1)
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





