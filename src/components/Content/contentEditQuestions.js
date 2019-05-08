import React, { Component } from 'react';
import { Container, Row, Col } from '../Grid'
import Label from '../Label'
<<<<<<< HEAD
import Dropdown from '../Dropdown'
import {PointToggler} from "../PointToggler"
=======
import PointToggler from "../PointToggler"
>>>>>>> 8de7a91705edd1aa94b5165af55bc683714d9ff4
import '../style.css';
///////////////////////////////////////////////////////////////////////////////////////////////////


class ContentEditQuestions extends Component {
    state = {
        questions: [1, 2, 3, 4, 5]
    }



    render() {
        return (
            <Container>
                <Row>
                    <Col size="sm-12">
                        <Label className="questionInput" text="Type question here" />
                    </Col>
                </Row>

                <br></br>

                {this.state.questions.map(question => (
                    <Row>
                        <Col size="sm-4">
                            <Label text="Response 1" />
                        </Col>

                        <Col size="sm-1">
                            Affects:
                        </Col>

                        <Col size="sm-3">
                            <PointToggler text="Trait" traits="10" />
                        </Col>

                        <Col size="sm-3">
                            <PointToggler text="Trait" traits="10" />
                        </Col>
                    </Row>
                ))}

            </Container>
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default ContentEditQuestions;