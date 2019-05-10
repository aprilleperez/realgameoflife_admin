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

    //Check the URL to grab the ID, s
    getGame() {
        findbyId(this.getGameIdUrl())
            .then((results) => {
                this.setState({
                    gameObj: results.data
                })
            })

    }

    updateAvatarName(avatar, name, value) {
        console.log(avatar, name, value)
        const id = this.getGameIdUrl();

        let newAvName = [...this.state.gameObj.avatars]
        for (let i = 0; i < this.state.gameObj.avatars.length; i++) {
            if (avatar === this.state.gameObj.avatars[i])
                console.log("HELLO FROM AV-NAME LOOP")
            let cur = this.state.gameObj.avatars[i]
            let newAv = {
                ...cur,
                [name]: value
            }
            newAvName[i] = newAv;
            console.log("NEW AV", newAv)

        }

    }

    updateAvatarTrait(avatar, trait, value) {
        console.log(avatar, trait, value)
        const id = this.getGameIdUrl();
        let allNewAvTraits = [...this.state.gameObj.avatars]
        for (let i = 0; i < this.state.gameObj.avatars.length; i++) {
            if (avatar === this.state.gameObj.avatars[i]) {
                console.log("HELLO FROM TRAIT LOOP")
                let cur = this.state.gameObj.avatars[i];
                let newAv = {
                    ...cur,
                    [trait]: value

                };
                // allNewAvs.push(newAv)
                allNewAvTraits[i] = newAv;

                const gameObj = this.state.gameObj
                const forRealUpdateAvatar = new GameObj(gameObj.name, gameObj.traits, allNewAvTraits, gameObj.questions)
                update(forRealUpdateAvatar, id)
                this.setState({
                    gameObj: forRealUpdateAvatar
                })
            }
        }
    }

    handleChange(event) {
        const { name, value } = event.target;
        console.log("HELLO FROM NAME HANDLECHANGE", name, value)

        this.setState({
            [name]: value
        })

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
                    onChange={this.onChange}


                />
            </Container>
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default ContentEdit;