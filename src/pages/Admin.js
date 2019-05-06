import React from 'react';
import * as Controller from "../utils/lifeAPIController";
import { testGameObj, updateGameObj } from "../constructors"
import { Link } from 'react-router-dom';

import { Col, Row, Container } from '../components/Grid';
import { Header, SubHeader } from '../components/Header'
import Content from '../components/Content'
import AdminButton from '../components/Button'



function Admin() {
    return (
        <Container fluid>
            <Header />
            <SubHeader />
            <Content />
            <AdminButton text="Create" buttonType="green" to="/create" />
            <AdminButton text="Edit" buttonType="blue" to="/edit" />
            <br></br>
            <br></br>
            <button className="btn btn-primary" type="button" onClick={() => Controller.update(updateGameObj, "5ccf266b84b9a54c70ed7ba9")}>Update</button>
            <button className="btn btn-danger" type="button" onClick={() => Controller.create(testGameObj)}>Create</button>
            <button className="btn btn-danger" type="button" onClick={() => Controller.remove()}>Delete Game</button>
        </Container>
    )
}

export default Admin;




