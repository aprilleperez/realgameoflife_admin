import React, { Component } from 'react';
import { Container } from '../Grid'
import '../style.css';
import ContentEdit from "../Content/contentEdit"
///////////////////////////////////////////////////////////////////////////////////////////////////


class ContentCreateAvatars extends Component {
    state = {
        gameObj: {}
    }

    render() {
        console.log("CONTENT CREATE AVATARS", this.state.gameObj.avatars)

        return (
            <Container>
                <ContentEdit history={this.props.history} />
            </Container>
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default ContentCreateAvatars;