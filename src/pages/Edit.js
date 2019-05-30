import React, { Component } from 'react';
import { Container } from '../components/Grid';
import { Header } from '../components/Header'
import Content from '../components/Content'

///////////////////////////////////////////////////////////////////////////////////////////////////

class Edit extends Component {
    state = {

    }

    render() {
        return (
            <Container fluid>

                {window.location.pathname.startsWith(`${process.env.PUBLIC_URL}/edit/avatars/`) ? (
                    <Container fluid>
                        <Header text="Edit Avatars" />
                        {/* <AvatarHeader text="Update Avatar Selections" /> */}
                        <Content globalState={this.props.globalState} history={this.props.history} />

                    </Container>
                ) : null}
                {window.location.pathname.startsWith(`${process.env.PUBLIC_URL}/edit/questions/`) ? (
                    <Container fluid>
                        <Header text="Edit Questions" />
                        <Content history={this.props.history} />

                    </Container>
                ) : null}

            </Container>
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default Edit;
