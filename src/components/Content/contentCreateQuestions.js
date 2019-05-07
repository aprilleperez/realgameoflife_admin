import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from '../Grid'
import { ContentHeader } from '../Header'
import Label from '../Label'
import '../style.css';
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
                        <Col size="sm-6">
                            <Label text="Response 1" />
                        </Col>

                        <Col size="sm-3">
                            <p>TRAIT 1 +- TOGGLER HERE</p>
                        </Col>

                        <Col size="sm-3">
                            <p>TRAIT 2 +- TOGGLER HERE</p>
                        </Col>
                    </Row>
                ))}

            </Container>
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default ContentCreateQuestions;