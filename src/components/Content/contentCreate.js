import React, { Component } from 'react';
import * as constructor from "../../constructors"
import * as api from "../../utils/lifeAPIController"
import { Container, Row, Col } from '../Grid'
import { ContentHeader } from '../Header'
import Label from '../Label'
import '../style.css';
import AdminButton from '../Button';
import { Button, ButtonToolbar } from "react-bootstrap"
import { MyVerticallyCenteredModal } from "../Modal"

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
            modalShow: false
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
        let traits = Object.keys(this.state).filter(key => !key.startsWith("GameName")).map(key => this.state[key])
        let templateObj = constructor.templateConstructor(traits, this.state.GameName)
        console.log("TEMPLATE OBJECT", templateObj)
        api.create(templateObj)
            .then((results) => {
                let id = results.data._id
                this.props.history.push(`/create/avatars/${id}`)
            }
            );

    }

    render() {
        let modalClose = () => this.setState({ modalShow: false })
        return (

            <Container>
                <ButtonToolbar className="float-right">
                    <Button

                        variant="primary"
                        onClick={() => this.setState({ modalShow: true })}
                    >
                        Help!
        </Button>

                    <MyVerticallyCenteredModal
                        show={this.state.modalShow}
                        onHide={modalClose}
                    />
                </ButtonToolbar>

                <Row>
                    <Col size="sm-12">
                        <ContentHeader text="Instructions" />

                    </Col>
                </Row>

                <Row>
                    <Col size="sm-12">
                        <p>First start by naming your unique game. This game is based off of traits, or stats, that weigh the responses and outcomes you will be able to view. The traits below will not be weighed in a particular order when you declare them, however once you hit next, the traits will be locked in.
                            <br></br>
                            <br></br>
                            On the following screens you will be able to edit: the avatars (5 total) and the starting points of their stats based off the traits (min 1, max 20), and the questions (5 total) each being weighed by the current points of the avatar's traits. Each question will have 5 response which will increase or decrease the avatar's stats, as well as have a certain outcome.
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col size="sm-3">
                    </Col>

                    <Col size="sm-6">
                        <Label onChange={this.handleChange} traitNumber="GameName" className="thisCreateTraits" text="Game Name" />
                        <hr></hr>
                    </Col>

                    <Col size="sm-3">
                    </Col>

                </Row>

                <Row>
                    <Col size="sm-3">
                    </Col>

                    <Col size="sm-6">
                        {texts.map((text, i) => (
                            <Label onChange={this.handleChange} className="thisCreateTraits" text={text} traitNumber={i} />
                        ))}
                    </Col>

                    <Col size="sm-3">
                    </Col>

                </Row>

                <AdminButton text="Next" buttonType="green" onClick={this.buildTraits} />

            </Container>
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default ContentCreate;