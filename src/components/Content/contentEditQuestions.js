import React, { Component } from 'react';
import { Container, Row, Col } from '../Grid'
import Label from '../Label'
import Dropdown from '../Dropdown'
import { PointToggler } from "../PointToggler"
import '../style.css';
///////////////////////////////////////////////////////////////////////////////////////////////////


class ContentEditQuestions extends Component {
    state = {
        questions: [1, 2, 3, 4, 5],
        trait1Val: 10,
        trait2Val: 15
    }

    onClick = () => {
        // if (className === "fa fa-plus") {
        //     this.setState({
        //         trait1Val: this.state.trait1Val + 1,
        //     })
        // }
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
                    <Row>
                        <Col size="sm-4">
                            <Label text="Response 1" />
                        </Col>

                        <Col size="sm-1">
                            Affects:
                        </Col>

                        <Col size="sm-3">
                            <PointToggler text="Trait" trait1Val={this.state.trait1Val} onClick={this.onClick} />
                        </Col>

                        <Col size="sm-3">
                            <PointToggler text="Trait" trait2Val={this.state.trait2Val} onClick={this.onClick} />
                        </Col>
                    </Row>
                ))}

            </Container>
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default ContentEditQuestions;