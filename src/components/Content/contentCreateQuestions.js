import React, { Component } from 'react';
import { Container, Row, Col } from '../Grid'
import Label from '../Label'
import PointToggler from "../PointToggler"
import '../style.css';

// import Dropdown from '../Dropdown'
// import { ContentHeader } from '../Header'
// import { Link } from 'react-router-dom';
///////////////////////////////////////////////////////////////////////////////////////////////////


class ContentCreateQuestions extends Component {
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
                            <PointToggler text="Trait" />
                        </Col>

                        <Col size="sm-3">
                            <PointToggler text="Trait" />
                        </Col>
                    </Row>
                ))}

            </Container>
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default ContentCreateQuestions;