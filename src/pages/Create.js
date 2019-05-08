import React, { Component } from 'react';
import * as Controller from "../utils/lifeAPIController";
import { testGameObj, updateGameObj } from "../constructors"
import { Link } from 'react-router-dom';

import { Col, Row, Container } from '../components/Grid';
import { Header, SubHeader } from '../components/Header'
import Content from '../components/Content'
import AdminButton from '../components/Button'
///////////////////////////////////////////////////////////////////////////////////////////////////


class Create extends Component {
    // state = {

    // }

    render() {
        return (
            <Container fluid>
                {window.location.pathname === "/create" ? (
                    <Container fluid>
                        <Header text="Build your next amazing game!" />
                        <SubHeader text="Read below for how to get started" />
                        <Content />
                        <AdminButton text="Next" buttonType="green" to="/create/avatars" />
                    </Container>

                ) : null}
                {window.location.pathname === "/create/avatars" ? (
                    <Container fluid>
                        <Header text="Create Avatars" />
                        <SubHeader text="THIS NEEDS TO BE UPDATED" />
                        <Content />
                        <AdminButton text="Next" buttonType="green" to="/create/questions" />
                    </Container>

                ) : null}
                {window.location.pathname === "/create/questions" ? (
                    <Container fluid>
                        <Header text="Create Questions" />
                        <SubHeader text="THIS NEEDS TO BE UPDATED" />
                        <Content />
                        <AdminButton text="Done" buttonType="green" to="/" />
                    </Container>
                ) : null}
            </Container>
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default Create;




{/* <AdminButton text="Next" buttonType="green" to="/create/questions" /> */ }


{/* <Container fluid>
<Header text="Build your next amazing game!" />
<SubHeader text="Read below for how to get started" />
<Content />
{window.location.pathname === "/create" ? (
    <AdminButton text="Next" buttonType="green" to="/create/avatars" />
) : null}
{window.location.pathname === "/create/avatars" ? (
    <AdminButton text="Next" buttonType="green" to="/create/questions" />
) : null}
{window.location.pathname === "/create/questions" ? (
    <AdminButton text="Done" buttonType="green" to="/" />
) : null}
</Container> */}