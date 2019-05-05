import React from 'react';
import * as Controller from "../utils/lifeAPIController";
import { testGameObj, updateGameObj } from "../constructors"

import { Col, Row, Container } from '../components/Grid';
import { Header, SubHeader } from '../components/Header'
import Content from '../components/Content'


function Admin() {
    return (
        <Container fluid>
            <Header />
            <SubHeader />
            <Content />
            <button className="btn btn-primary" type="button" onClick={() => Controller.update(updateGameObj, "5ccf266b84b9a54c70ed7ba9")}>Update</button>
            <button className="btn btn-danger" type="button" onClick={() => Controller.create(testGameObj)}>Create</button>
            <button className="btn btn-danger" type="button" onClick={() => Controller.remove()}>Delete Game</button>
        </Container>
    )
}

export default Admin;
