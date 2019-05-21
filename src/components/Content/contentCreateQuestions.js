import React, { Component } from 'react';

import { Container, Row, Col } from '../Grid'
import '../style.css';
import ContentEditQuestions from './contentEditQuestions';
///////////////////////////////////////////////////////////////////////////////////////////////////


class ContentCreateQuestions extends Component {
    state = {
        gameObj: {}
    }

    render() {


        return (
            <Container>
                <ContentEditQuestions history={this.props.history} />
            </Container>
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default ContentCreateQuestions;