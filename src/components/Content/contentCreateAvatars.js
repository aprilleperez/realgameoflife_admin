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