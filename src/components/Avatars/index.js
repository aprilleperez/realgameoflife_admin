import React from "react";
import { Col, Row, Container } from '../Grid';
import { Header, SubHeader } from '../Header';
import Card from "../Card"
import Label from "../Label"
import { PointToggler2 } from "../PointToggler";
import { partial } from "../../utils/partials"
import "../style.css"

let keys = ["trait1", "trait2", "trait3", "trait4", "trait5"];
const temporaryImagesCreate = "https://res.cloudinary.com/instapotty/image/upload/v1557722385/Life%20Game/Flam.png"

function Avatars(props) {
    return (
        <Container fluid>
            <Header />
            <SubHeader />
            {/* Map over the avatars object */}
            {props.avatars.map((avatar, i) => {
                let image = temporaryImagesCreate
                if (avatar.picture) {
                    image = avatar.picture
                }

                return (
                    <Row>
                        <Col size="md-4">
                            <Card remover={partial(props.remover, avatar)} avatar={avatar} avatarIndex={i} handleChange={props.handleChange} image={image} onClick={() => props.showWidget(partial(props.pictureUpdater, avatar))} />

                        </Col>
                        <Col size="md-4">
                            {keys.map(key =>
                                // had to change traitName to text for it to show up in the placeholder
                                (<Label traitName={props.traitName[key]} disabled="disabled" />)
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





