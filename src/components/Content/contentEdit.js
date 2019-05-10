import React, { Component } from 'react';
import { Container } from '../Grid'
import '../style.css';
import Avatars from '../Avatars';
import { Avatar, testDataObject, GameObj } from "../../constructors"
import axios from 'axios';
import { update, findbyId } from '../../utils/lifeAPIController';
///////////////////////////////////////////////////////////////////////////////////////////////////


class ContentEdit extends Component {
    state = {
        gameObj: {}
    }
    // Run get game once the component loads
    componentDidMount() {
        this.getGame()

    }

    getGame() {
        findbyId(this.getGameIdUrl())
            .then((results) => {
                this.setState({
                    gameObj: results.data
                })
            })

    }

    updateAvatarTrait(avatar, trait, value) {
        console.log(avatar, trait, value)
    }



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


    updateAvatar() {
        const id = this.getGameIdUrl();
        let updatedAvatar = [new Avatar("Update Avatar Name", 99, 99, 99, 99, 99)]
        const updateFromAvatarObj = new GameObj(testDataObject.name, testDataObject.traits, updatedAvatar, testDataObject.questions)

        update(updateFromAvatarObj, id)

    }

    render() {
        const gameObj = this.state.gameObj
        if (!gameObj) {
            return (<div></div>)
        }
        return (
            <Container>
                <Avatars avatars={gameObj.avatars ? gameObj.avatars : []}
                    traitName={gameObj.traits ? gameObj.traits : []}
                    updater={(avatar, trait, value) => { this.updateAvatarTrait(avatar, trait, value) }}
                />
            </Container>
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default ContentEdit;