import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from '../Grid'
import { ContentHeader } from '../Header'
import DashControl from '../DashControls'
import '../style.css';

// TODO: NEED TO ADD IN MAPPING FOR EVERY GAME THAT THIS USER HAS

function Content() {
    return (
        <div className="thisContent fluid">
            {/* TODO: This container needs to be where it maps over every game this user has and renders enough rows */}
            <Container>
                <Row>
                    <Col size="sm-6">
                        <ContentHeader />
                    </Col>

                    <Col size="sm-6">
                        <DashControl class="fas fa-play" text="Play" />  
                        <DashControl class="fas fa-user" text="Edit" />
                        <DashControl class="fas fa-poll-h" text="Edit" />  
                        <DashControl class="fas fa-trash" text="Drop" />
                    </Col>
                </Row>
            </Container>




            HELLO!!!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
    )
}

export default Content;