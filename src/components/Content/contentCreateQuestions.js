import React, { Component } from 'react';

import { Container, Row, Col } from '../Grid'
import Label from '../Label'
import Dropdown from '../Dropdown'
import { PointToggler } from "../PointToggler"
import '../style.css';
///////////////////////////////////////////////////////////////////////////////////////////////////


class ContentCreateQuestions extends Component {
    state = {
        questions: [1, 2, 3, 4, 5],
        trait1Val: 10,
        trait2Val: 15
    }

    onClick = () => {
        this.setState({
            trait1Val: this.state.trait1Val + 1,
            trait2Val: this.state.trait2Val + 1
        })
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
                    <Container fluid>
                        <Row>
                            <Col size="sm-6">
                                <Label text="Type a response here" />
                            </Col>

                            <Col size="sm-6">
                                <Label text="Type an outcome to this response" />
                            </Col>
                        </Row>

                        <Row>
                            <Col size="sm-5">
                                <PointToggler text="Affects Trait" trait1Val={this.state.trait1Val} onClick={this.onClick} />
                            </Col>

                            <Col size="sm-5">
                                <PointToggler text="Affects Trait" trait2Val={this.state.trait2Val} onClick={this.onClick} />
                            </Col>
                        </Row>

                        <hr></hr>
                    </Container>
                ))}

            </Container>
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default ContentCreateQuestions;