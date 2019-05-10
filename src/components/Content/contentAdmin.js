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
                    <Row>
                        <Col size="sm-6">
                            <ContentHeader text={game.gameName} />
                        </Col>

                        <Col size="sm-6">
                            <DashControl class="fas fa-play" text="Play" to="/" /> {/*TODO: figure out route to play this game */}
                            <DashControl class="fas fa-user" text="Edit" to={`${process.env.PUBLIC_URL}/edit/avatars/${game.gameId}`} />
                            <DashControl class="fas fa-poll-h" text="Edit" to={`${process.env.PUBLIC_URL}/edit/questions/${game.gameId}`} />
                            <DashControl class="fas fa-trash" text="Drop" click={() => { remove(game.gameId) }} />
                        </Col>
                    </Row>
                ))}

            </Container>
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default ContentAdmin;