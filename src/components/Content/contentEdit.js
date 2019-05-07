import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from '../Grid'
import '../style.css';
import Avatars from '../Avatars';
///////////////////////////////////////////////////////////////////////////////////////////////////


class ContentEdit extends Component {
    // state = {

    // }

    render() {
        return (
            <Container>
                <Avatars />
            </Container>
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default ContentEdit;