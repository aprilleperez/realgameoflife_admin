import React, { Component } from 'react';

import { Container } from '../components/Grid';
import { Header, SubHeader, AvatarHeader } from '../components/Header'
import { QuestionDropdown } from '../components/Dropdown'
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
                        {/* <SubHeader text="Avatar Tabs will go here" /> */}
                        <AvatarHeader />
                        <Content />
                        <AdminButton text="Next" buttonType="green" to="/create/questions" />
                    </Container>
                ) : null}
                {window.location.pathname === "/create/questions" ? (
                    <Container fluid>
                        <Header text="Create Questions" />
                        {/* <SubHeader text="Question Dropdowns will go here" /> */}
                        <QuestionDropdown qtext="Question" text="Trait" />
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