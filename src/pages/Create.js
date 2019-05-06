import React, { Component } from 'react';
import * as Controller from "../utils/lifeAPIController";
import { testGameObj, updateGameObj } from "../constructors"
import { Link } from 'react-router-dom';

import { Col, Row, Container } from '../components/Grid';
import { Header, SubHeader } from '../components/Header'
import Content from '../components/Content'
import AdminButton from '../components/Button'


class Create extends Component {
    state = {
        // organization: "Non-Profit Goodness"
        // TODO: figure out user state here
    }
    
    render() {
        return (
            <Container fluid>
                <Header text="Build your next amazing game!" />
                <SubHeader text="Read below for how to get started" />
                <Content />
                <AdminButton text="Next" buttonType="green" to="/create" />
            </Container>
        )
    }
}

export default Create;
