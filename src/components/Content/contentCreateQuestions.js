import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from '../Grid'
import { ContentHeader } from '../Header'
import Label from '../Label'
import '../style.css';
///////////////////////////////////////////////////////////////////////////////////////////////////


class ContentCreateQuestions extends Component {
    // state = {

    // }

    render() {
        return (
            <Container>
                <Row>
                    <Col size="sm-12">
                        <Label />
                    </Col>
                </Row>

                <Row>
                    <Col size="sm-12">
                        <p>YAYAYAYAY</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default ContentCreateQuestions;