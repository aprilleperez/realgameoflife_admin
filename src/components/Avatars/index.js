import React from "react";
import { Col, Row, Container } from '../Grid';
import { Header, SubHeader } from '../Header';
import Card from "../Card"
import Label from "../Label"
import { PointToggler2 } from "../PointToggler";
import { partial } from "../../utils/partials"
import "../style.css"

let keys = ["trait1", "trait2", "trait3", "trait4", "trait5"];
const temporaryImagesEdit = ["https://res.cloudinary.com/instapotty/image/upload/v1557721995/Life%20Game/Steve.jpg", "https://res.cloudinary.com/instapotty/image/upload/v1557721996/Life%20Game/Tony.jpg", "https://res.cloudinary.com/instapotty/image/upload/v1557721982/Life%20Game/Bruce.png", "https://res.cloudinary.com/instapotty/image/upload/v1557721993/Life%20Game/Natasha.jpg", "https://res.cloudinary.com/instapotty/image/upload/v1557721986/Life%20Game/Freya.jpg"]
const temporaryImagesCreate = "https://res.cloudinary.com/instapotty/image/upload/v1557722385/Life%20Game/Flam.png"

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
                let url = window.location.href
                let image = temporaryImagesCreate
                if (url.includes("edit")) {
                    image = temporaryImagesEdit[i]
                }
                return (
                    <Row>
                        <Col size="md-4">
                            <Card avatar={avatar} avatarIndex={i} handleChange={props.handleChange} image={image} />
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





