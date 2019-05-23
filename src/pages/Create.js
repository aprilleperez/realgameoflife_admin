import React, { Component } from 'react';
import { Container } from '../components/Grid';
import { Header, SubHeader } from '../components/Header'
import Content from '../components/Content'
///////////////////////////////////////////////////////////////////////////////////////////////////


class Create extends Component {
    render() {
        return (
            <Container fluid>

                {window.location.pathname === `${process.env.PUBLIC_URL}/create` ? (
                    <Container fluid>
                        <Header text="Build your next amazing game!" />
                        <SubHeader text="Read below for how to get started" />
                        <Content history={this.props.history} />

                    </Container>
                ) : null}
                {window.location.pathname.startsWith(`${process.env.PUBLIC_URL}/create/avatars`) ? (
                    <Container fluid>
                        <Header text="Create Avatars" />
                        {/* <AvatarHeader /> */}
                        <Content history={this.props.history} />

                    </Container>
                ) : null}
                {window.location.pathname.startsWith(`${process.env.PUBLIC_URL}/create/questions`) ? (
                    <Container fluid>
                        <Header text="Create Questions" />
                        {/* <QuestionDropdown qtext="Question" text="Trait" /> */}
                        <Content history={this.props.history} />

                    </Container>
                ) : null}

            </Container>
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default Create;