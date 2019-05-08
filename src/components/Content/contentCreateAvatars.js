import React, { Component } from 'react';
import axios from 'axios';
import { Container } from '../Grid'
import '../style.css';
import Avatars from '../Avatars';

///////////////////////////////////////////////////////////////////////////////////////////////////


class ContentCreateAvatars extends Component {

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
        console.log(this.state.gameObj.avatars)

        return (
            <Container>
                <Avatars avatars={this.state.gameObj.avatars ? this.state.gameObj.avatars : []}
                />
            </Container>
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default ContentCreateAvatars;









// class ContentCreateAvatars extends Component {
//     // state = {

//     // }

//     render() {
//         return (
//             <Container>
//                 <p>YAYYAYAAY</p>
//             </Container>
//         )
//     }

    // state = {
    //     gameObj: {}
    // }

    // componentDidMount() {
    //     this.getGame(this.getGameIdUrl());
    // }

    // getGameIdUrl() {
    //     const url = window.location.pathname
    //     const avatarIndex = url.indexOf("avatars")
    //     const fromAvatars = url.substring(avatarIndex)
    //     const id = fromAvatars.substring(fromAvatars.indexOf("/"))

    //     return id
    // }

    // getGame(id) {

    //     axios.get(`https://real-life-api.herokuapp.com/api/games/${id}`)
    //         .then((results) => {
    //             console.log(results.data)
    //             this.setState({
    //                 gameObj: results.data
    //             })
    //         })
    // }


    // render() {
    //     console.log(this.state.gameObj.avatars)

    //     return (
    //         <Container>
    //             <Avatars avatars={this.state.gameObj.avatars ? this.state.gameObj.avatars : []}
    //             />
    //         </Container>
    //     )
    // }
// }


///////////////////////////////////////////////////////////////////////////////////////////////////
// export default ContentCreateAvatars;