import React, { Component } from 'react';
import { Container, Row, Col } from '../Grid'
import { ContentHeader } from '../Header'
import DashControl from '../DashControls'
import '../style.css';
import { remove } from '../../utils/lifeAPIController';
///////////////////////////////////////////////////////////////////////////////////////////////////


class ContentAdmin extends Component {

    render() {

        return (
            <Container>

                {this.props.games.map(game => (
                    <Container>
                        <Row>
                            <Col size="sm-6">
                                <ContentHeader text={game.gameName} />
                            </Col>

                            <Col size="sm-6">
                                <DashControl class="appControls fas fa-play" text="Play" to="/" /> {/*TODO: figure out route to play this game */}
                                <DashControl class="appControls fas fa-user" text="Edit" to={`/edit/avatars/${game.gameId}`} />
                                <DashControl class="appControls fas fa-poll-h" text="Edit" to={`/edit/questions/${game.gameId}`} />
                                <DashControl class="appControls fas fa-trash" text="Drop" click={() => { remove(game.gameId) }} />
                            </Col>
                            <hr></hr>
                        </Row>
                        <hr></hr>
                    </Container>
                ))}

            </Container>
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default ContentAdmin;