import React, { Component } from 'react';
import * as constructor from "../../constructors"
import * as api from "../../utils/lifeAPIController"

import { Container, Row, Col } from '../Grid'
import { ContentHeader } from '../Header'
import Label from '../Label'
import '../style.css';
import AdminButton from '../Button';
///////////////////////////////////////////////////////////////////////////////////////////////////

//Since all of our traits are always in this order, creating an array for easy mapping down in render.
// Probably not ideal, but it works!
let texts = ["trait1", "trait2", "trait3", "trait4", "trait5"]

// Creating our class and setting the constructor and super constructor. Binding our methods below so they
// can be easily called from onClick (in theory). Initalizing state to empty so we can update it when needed.
class ContentCreate extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);
        this.buildTraits = this.buildTraits.bind(this);

        this.state = {
        }
    }

    // Take in the changed value and set state to be that
    handleChange(event) {
        const { name, value } = event.target;
        console.log("HELLO FROM HANDLECHANGE", name, value)

        this.setState({
            [name]: value
        })
    }

    // This method builds our new object using our imported constructors and sends it to the database.
    buildTraits() {
        let traits = Object.keys(this.state).map(key => this.state[key])
        let templateObj = new constructor.GameObj("TO DO - Make Name For Game", traits, [], [])
        console.log("TEMPLATE OBJECT", templateObj)
        api.create(constructor.testDataObject)
            .then(results => console.log(results))
    }

    render() {
        return (
            <Container>

                <Row>
                    <Col size="sm-12">
                        <ContentHeader text="Instructions" />
                    </Col>
                </Row>

                <Row>
                    <Col size="sm-12">
                        <p>INSTRUCTIONS GO HERE: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste rerum consequuntur maiores eaque iusto ea accusantium, est quisquam earum ut possimus quos iure eveniet fugiat dolores delectus ipsam aliquid libero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est similique at consequatur soluta omnis aperiam voluptate quasi eveniet vero earum deserunt ad consectetur hic fugiat ullam nesciunt, nobis possimus eaque.</p>
                    </Col>
                </Row>

                <Row>
                    <Col size="sm-6">
                        {texts.map((text, i) => (
                            <Label onChange={this.handleChange} className="thisCreateTraits" text={text} traitNumber={i} />
                        ))}
                    </Col>

                </Row>

                <button text="Next" buttonType="green" to="/create/avatars" onClick={this.buildTraits} />

            </Container>
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default ContentCreate;