import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from '../Grid'
import { ContentHeader } from '../Header'
import DashControl from '../DashControls'
import '../style.css';
///////////////////////////////////////////////////////////////////////////////////////////////////


class ContentAdmin extends Component {

    render() {
        return (
            <Container>
                {/* TODO: re-visit how it maps once real games are passed in (CONFIGURE STATE) */}
                {this.props.games.map(game => (
                    <Row>
                        <Col size="sm-6">
                            <ContentHeader text={game.gameName} /> {/*TODO: get this to dynamically change based on state*/}
                        </Col>

                        <Col size="sm-6">
                            <DashControl class="fas fa-play" text="Play" href="/" />
                            <DashControl class="fas fa-user" text="Edit" href={`/edit/avatars/${game.gameId}`} />
                            <DashControl class="fas fa-poll-h" text="Edit" href={`/edit/questions/${game.gameId}`} />
                            <DashControl class="fas fa-trash" text="Drop" href="/" /> {/*TODO: get drop to delete a game*/}
                        </Col>
                    </Row>
                ))}
            </Container>
        )
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////
export default ContentAdmin;