import React, { Component } from 'react';
// import axios from 'axios';
import { Container } from '../Grid'
import '../style.css';
import ContentEdit from "../Content/contentEdit"
// import Avatars from '../Avatars';
// import { testDataObject } from "../../constructors"
///////////////////////////////////////////////////////////////////////////////////////////////////


class ContentCreateAvatars extends Component {
    state = {
        gameObj: {}
    }

    render() {
        console.log("CONTENT CREATE AVATARS", this.state.gameObj.avatars)

        return (
            <Container>
                <ContentEdit></ContentEdit>
            </Container>
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default ContentCreateAvatars;