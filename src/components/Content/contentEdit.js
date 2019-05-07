import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from '../Grid'
import '../style.css';
import Avatars from '../Avatars';
import { testDataObject } from "../../constructors"
import axios from 'axios';
///////////////////////////////////////////////////////////////////////////////////////////////////


class ContentEdit extends Component {

    state = {
        gameObj: {}
    }

    componentDidMount() {
        let id = "5cd1cc1b92e5900017321885"
        this.getGame(id);
    }

    getGame(id) {

        axios.get(`https://real-life-api.herokuapp.com/api/games/${id}`)
            .then(test)
    }

    // getTestGame() {
    //     let gameObj = testDataObject
    //     this.setState({
    //         gameObj: gameObj
    //     })
    // }

    render() {
        return (
            <Container>
                <Avatars avatars={this.state.gameObj.avatars} />
            </Container>
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default ContentEdit;