import React from 'react';
import * as Controller from "../utils/lifeAPIController";
import { testGameObj, updateGameObj } from "../constructors"

import { Col, Row, Container } from '../components/Grid';
import { Header, SubHeader } from '../components/Header'
import Content from '../components/Content'
import Button from '../components/Button'
import Card from "../components/Card"


// function Admin() {
//     return (
//         <Container fluid>
//             <Header />
//             <SubHeader />
//             <Content />
//             <Button message="Done"/>
//             <br></br>
//             <br></br>
//             <button className="btn btn-primary" type="button" onClick={() => Controller.update(updateGameObj, "5ccf266b84b9a54c70ed7ba9")}>Update</button>
//             <button className="btn btn-danger" type="button" onClick={() => Controller.create(testGameObj)}>Create</button>
//             <button className="btn btn-danger" type="button" onClick={() => Controller.remove()}>Delete Game</button>
//         </Container>
//     )
// }

// export default Admin;

function Avatars() {
    return (
        <Container fluid>
            <Header />
            <SubHeader />
            <Row>
                <Col size="md-4">
                    <Card>
                    </Card>
                </Col>
                <Col size="md-4">
                    <div>
                        {/* These are going to need to be passed as props */}

                    </div>
                </Col>

            </Row>

        </Container>
    )
}

export default Avatars;


