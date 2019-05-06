import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from '../Grid'
import { ContentHeader } from '../Header'
import DashControl from '../DashControls'
import '../style.css';


class Content extends Component {
    state = {
        games: [1, 2, 3], // DUMMY STATE
        organization: "Non-Profit goodness"
    }

    render() {
        return (
            <div className="thisContent fluid">
                {window.location.pathname === "/" ? (
                    <Container>
                        {/* TODO: re-visit how it maps once real games are passed in (CONFIGURE STATE) */}
                        {this.state.games.map(game => (
                            <Row>
                                <Col size="sm-6">
                                    <ContentHeader text="Game 1: Something for Non Profit" /> {/*TODO: get this to dynamically change based on state*/}
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
                ) : (
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
                    )}
            </div>
        )
    }
}

export default Content;




{/* <Container> */ }
{/* TODO: re-visit how it maps once real games are passed in (CONFIGURE STATE) */ }
// {this.state.games.map(game => (
//     <Row>
//         <Col size="sm-6">
//             <ContentHeader /> {/*TODO: get this to dynamically change based on state*/}
//         </Col>

//         <Col size="sm-6">
//             <DashControl class="fas fa-play" text="Play" href="/" />
//             <DashControl class="fas fa-user" text="Edit" href="/edit" />
//             <DashControl class="fas fa-poll-h" text="Edit" href="/edit" />
//             <DashControl class="fas fa-trash" text="Drop" href="/" />
//         </Col>
//     </Row>
// ))}
// </Container>
