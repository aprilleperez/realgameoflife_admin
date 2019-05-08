import React, { Component } from 'react';
import { Container } from '../Grid'
import '../style.css';
import Avatars from '../Avatars';
import axios from 'axios';
///////////////////////////////////////////////////////////////////////////////////////////////////


class ContentEdit extends Component {

    state = {
        gameObj: {}
    }

    //Run get game once the component loads
    componentDidMount() {
        this.getGame(this.getGameIdUrl());
    }

    //this parses the url and grabs the id from it. It grabs the index of the avatars string
    //and marks the end of the string, then marks the index of the slash, and grabs the id
    //from what comes after the slash
    getGameIdUrl() {
        const url = window.location.pathname
        const avatarIndex = url.indexOf("avatars")
        const fromAvatars = url.substring(avatarIndex)
        const id = fromAvatars.substring(fromAvatars.indexOf("/"))

        return id
    }

    //this is the find by id get to our API. Returns the game object with the id from the 
    //url. Sets the state to that object
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