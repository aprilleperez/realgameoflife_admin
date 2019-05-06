import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from '../Grid'
import { ContentHeader } from '../Header'
import DashControl from '../DashControls'
import '../style.css';


class Content extends Component {
    state = {
        games: [1, 2, 3] // DUMMY STATE
    }

    render() {
        return (
            <div className="thisContent fluid">
                <Container>
                    {/* TODO: re-visit how it maps once real games are passed in */}
                    {this.state.games.map(game => (
                        <Row>
                            <Col size="sm-6">
                                <ContentHeader />
                            </Col>

                            <Col size="sm-6">
                                <DashControl class="fas fa-play" text="Play" href="/" />
                                <DashControl class="fas fa-user" text="Edit" href="/edit" />
                                <DashControl class="fas fa-poll-h" text="Edit" href="/edit" />
                                <DashControl class="fas fa-trash" text="Drop" href="/" />
                            </Col>
                        </Row>
                    ))}
                </Container>
            </div>
        )
    }
}

export default Content;
