import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from '../Grid'
import { ContentHeader } from '../Header'
import '../style.css';
///////////////////////////////////////////////////////////////////////////////////////////////////


class ContentCreate extends Component {
    // state = {

    // }

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
                        <p>INSTRUCTIONS GO HERE: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste rerum consequuntur maiores eaque iusto ea accusantium, est quisquam earum ut possimus quos iure eveniet fugiat dolores delectus ipsam aliquid libero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est similique at consequatur soluta omnis aperiam voluptate quasi eveniet vero earum deserunt ad consectetur hic fugiat ullam nesciunt, nobis possimus eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex expedita corrupti recusandae nemo nobis cum ipsam consectetur ipsum libero ducimus! Sunt quos qui sint itaque molestias quam quod</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default ContentCreate;