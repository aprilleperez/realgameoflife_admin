import React, { Component } from 'react';
import { Container } from '../Grid'
import '../style.css';
import Avatars from '../Avatars';
import axios from 'axios';
///////////////////////////////////////////////////////////////////////////////////////////////////


class ContentEdit extends Component {

    // state = {
    //     gameObj: {}
    // }

    //Run get game once the component loads
    // componentWillMount() {
    //     this.getGame(this.getGameIdUrl());
    // }

    //this parses the url and grabs the id from it. It grabs the index of the avatars string
    //and marks the end of the string, then marks the index of the slash, and grabs the id
    //from what comes after the slash
    getGameIdUrl() {
        const url = window.location.pathname
        const avatarIndex = url.indexOf("avatars")
        const fromAvatars = url.substring(avatarIndex)
        const id = fromAvatars.substring(fromAvatars.indexOf("/") + 1)

        return id
    }

    //this is the find by id get to our API. Returns the game object with the id from the 
    //url. Sets the state to that object
    // getGame(id) {
    //     console.log("hi from contentEdit", this.props)
    //     // this.setState({
    //     //     gameObj: this.props.globalState.gamesById[id]
    //     // })
    // }


    render() {
        // console.log("Trait Names", this.gameObj.traits)
        const id = this.getGameIdUrl();
        const gameObj = this.props.globalState.allGames.filter((game) => { return game._id === id })[0];
        console.log(this.props.globalState, id, gameObj);
        if (!gameObj) {
            return (<div></div>)
        }
        return (
            <Container>
                <Avatars avatars={gameObj.avatars ? gameObj.avatars : []}
                    traitName={gameObj.traits ? gameObj.traits : []}
                />
            </Container>
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default ContentEdit;