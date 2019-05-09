import React, { Component } from 'react';
import { Container, Row, Col } from '../Grid'
import { ContentHeader } from '../Header'
import DashControl from '../DashControls'
import '../style.css';
import { remove } from '../../utils/lifeAPIController';
///////////////////////////////////////////////////////////////////////////////////////////////////


class ContentAdmin extends Component {

    render() {
        console.log("THIS PROPS GAMES", this.props.games)
        return (
            <Container>
                {/* Map over the games prop */}

                {this.props.games.map(game => (
                    <Row>
                        <Col size="sm-6">
                            <ContentHeader text={game.gameName} /> {/*TODO: get this to dynamically change based on state*/}
                        </Col>

                        <Col size="sm-6">
                            <DashControl class="fas fa-play" text="Play" href="/" />
                            <DashControl class="fas fa-user" text="Edit" href={`/edit/avatars/${game.gameId}`} />
                            <DashControl class="fas fa-poll-h" text="Edit" href={`/edit/questions/${game.gameId}`} />
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