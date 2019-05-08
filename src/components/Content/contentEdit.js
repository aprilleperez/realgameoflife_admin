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
        this.getGame(this.getGameIdUrl());
    }

    getGameIdUrl() {
        const url = window.location.pathname
        const avatarIndex = url.indexOf("avatars")
        const fromAvatars = url.substring(avatarIndex)
        const id = fromAvatars.substring(fromAvatars.indexOf("/"))

        return id
    }

    getGame(id) {

        axios.get(`https://real-life-api.herokuapp.com/api/games/${id}`)
            .then((results) => {
                console.log(results.data)
                this.setState({
                    gameObj: results.data
                })
            })
    }


    render() {
        console.log("Trait Names", this.state.gameObj.traits)

        return (
            <Container>
                <Avatars avatars={this.state.gameObj.avatars ? this.state.gameObj.avatars : []}
                    traitName={this.state.gameObj.traits ? this.state.gameObj.traits : []}
                />
            </Container>
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default ContentEdit;