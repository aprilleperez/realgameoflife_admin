import React, { Component } from 'react';
import { GameObj, Avatar } from "../../constructors"
import { update, findbyId } from '../../utils/lifeAPIController';
import { Container } from '../Grid'
import '../style.css';
import Avatars from '../Avatars';
import AdminButton from '../Button';
///////////////////////////////////////////////////////////////////////////////////////////////////


class ContentEdit extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);
        this.updateAvatarName = this.updateAvatarName.bind(this);
        this.showWidget = this.showWidget.bind(this);
        this.updatePicture = this.updatePicture.bind(this);
        this.removeAvatar = this.removeAvatar.bind(this);
        this.addAvatar = this.addAvatar.bind(this);


        this.state = {
            gameObj: {}
        }
    }

    // Run get game once the component loads
    componentDidMount() {
        this.getGame()
    }

    //Check the URL to grab the ID, then pass that id up to the findbyId to get it from the database.
    //Save that entire object in state
    getGame() {
        findbyId(this.getGameIdUrl())
            .then((results) => {
                this.setState({
                    gameObj: results.data
                })
            })
    }

    // This is so we can grab that value of an updated filed in real time. 
    handleChange(event) {
        const { name, value } = event.target;
        console.log("HELLO FROM NAME HANDLECHANGE", name, value)
        let allNewAvs = [...this.state.gameObj.avatars]
        const cur = this.state.gameObj.avatars[name];
        let newAv = {
            ...cur,
            name: value

        };
        allNewAvs[name] = newAv;
        const newGameObj = {
            ...this.state.gameObj,
            avatars: allNewAvs
        }
        this.setState({
            gameObj: newGameObj
        })
    }

    updateAvatarName() {

        const id = this.getGameIdUrl();
        const gameObj = this.state.gameObj
        //const forRealUpdateAvatar = new GameObj(gameObj.name, gameObj.traits, newAvName, gameObj.questions)
        update(gameObj, id).then(() => {
            this.props.history.push(`/create/questions/${id}`)
        })

    }


    // helper method so we can grab the value of the trait that's being edited on each Avatar.
    // Grab the game ID again so we know which game we're working on. Create a new duplicate array,
    //called allNewAvTraits. Loop over the original gameObj and compare the current state of Avatr
    // to each avatar in the original gameObj. When a match is found, set that instance to the variable
    // cur to represent the current avatar. Spread all the traits in the object, but update the trait
    // that's been edited by the user. Do this for each avatar trait that's been edited.
    updateAvatarTrait(avatar, trait, value) {
        console.log("UPDATE AVATAR TRAIT:", "AVATAR:", avatar, "TRAIT:", trait, "VALUE:", value)
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
                // Now that we have both the current avatar and the traits that have been changed,
                //set our duplicate array at each trait index to be the newly created trait.
                // set gameObj to this.state.gameObj so we only have to write all that once. Then make a 
                // new instance of the GameObj class, passing the constructor the name, traits, newly updated 
                // avatar traits, and questions. 

                // Send all of that up to the database using our update function, passing it the object we're updating
                //and its id. Then, update the gameObj in state to be our new object!
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

    updatePicture(avatar, url) {
        console.log("THIS AVATAR:", avatar, "URL:", url)
        const id = this.getGameIdUrl();
        let allNewAvs = [...this.state.gameObj.avatars]
        for (let i = 0; i < this.state.gameObj.avatars.length; i++) {
            if (avatar === this.state.gameObj.avatars[i]) {
                let cur = this.state.gameObj.avatars[i]
                let newAv = {
                    ...cur,
                    picture: url
                }
                allNewAvs[i] = newAv
                const gameObj = this.state.gameObj
                const newAvatarWithPicture = new GameObj(gameObj.name, gameObj.traits, allNewAvs, gameObj.questions)
                console.log("NEW AVATAR WITH PICTURE:", newAvatarWithPicture)
                update(newAvatarWithPicture, id)
                this.setState({
                    gameObj: newAvatarWithPicture
                })
            }
        }

    }

    removeAvatar(avatar) {
        const id = this.getGameIdUrl();
        let allNewAvs = [...this.state.gameObj.avatars]
        console.log("HELLO FROM REMOVE AVATAR", avatar)
        for (let i = 0; i < this.state.gameObj.avatars.length; i++) {
            if (avatar === this.state.gameObj.avatars[i]) {

                allNewAvs.splice(i, 1);
                const gameObj = this.state.gameObj
                const newAvs = new GameObj(gameObj.name, gameObj.traits, allNewAvs, gameObj.questions)
                update(newAvs, id)
                console.log("UPDATE HAPPENED")
                this.setState({
                    gameObj: newAvs
                })
            }
        }
    }

    addAvatar() {
        const id = this.getGameIdUrl();
        let allNewAvs = [...this.state.gameObj.avatars]
        console.log("HELLO FROM ADD AVATAR")
        let templateAvatar = new Avatar("Name this Avatar", null, 0, 0, 0, 0, 0)
        allNewAvs.push(templateAvatar)
        console.log("NEW LIST OF AVATARS", allNewAvs)
        const gameObj = this.state.gameObj
        const newAvs = new GameObj(gameObj.name, gameObj.traits, allNewAvs, gameObj.questions)
        update(newAvs, id)
        console.log("ADD AVATAR HIT DATABASE")
        this.setState({
            gameObj: newAvs
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

    ///////////////////////////////////////////////
    //                                           //
    //    CLOUDINARY                             // 
    ///////////////////////////////////////////////

    showWidget(updatePicture) {
        window.cloudinary.openUploadWidget(
            {
                cloud_name: "instapotty",
                upload_preset: "wveqgdsr",
                thumbnailTransformation: { width: 200, height: 200, crop: 'fit' },
                multiple: false,
                clientAllowedFormats: ["png", "gif", "jpeg"],
                maxFileSize: 1500000,
                maxImageWidth: 5000,
                maxImageHeight: 5000,
                minImageWidth: 200,
                minImageHeight: 200
            },
            function (error, result) {
                console.log(result)
                if (result.event === "success") {
                    let newUrl = result.info.thumbnail_url
                    console.log("NEW PICTURE URL:", newUrl)
                    updatePicture(newUrl)

                }
            }
        )

    }

    // If gameObj isn't empty (which it will be on first render, in which case just return an empty div),
    // render the Avatars component, passing it the gameObj that exists in state (unless it's empty, in which case)
    // just pass an empty array). 

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
                    pictureUpdater={(avatar, url) => { this.updatePicture(avatar, url) }}
                    handleChange={this.handleChange}
                    passedState={this.state}
                    showWidget={this.showWidget}
                    remover={(avatar) => { this.removeAvatar(avatar) }}

                />
                <button onClick={this.addAvatar}>Add another avatar</button>

                <br></br>
                <br></br>
                <br></br>
                <AdminButton className="btn btn-danger" text="Save Avatars" onClick={this.updateAvatarName} />
                <br></br>
                <br></br>
                <br></br>

            </Container>
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default ContentEdit;