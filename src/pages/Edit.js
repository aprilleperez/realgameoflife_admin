import React, { Component } from 'react';
import { update } from '../utils/lifeAPIController';

import { Container } from '../components/Grid';
import { Header, SubHeader, AvatarHeader } from '../components/Header'
import { QuestionDropdown } from '../components/Dropdown'
import Content from '../components/Content'
import AdminButton from '../components/Button'
///////////////////////////////////////////////////////////////////////////////////////////////////


function getGameIdUrl() {
    const url = window.location.pathname
    const avatarIndex = url.indexOf("avatars")
    const fromAvatars = url.substring(avatarIndex)
    const id = fromAvatars.substring(fromAvatars.indexOf("/") + 1)

    return id
}


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
