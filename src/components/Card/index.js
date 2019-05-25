import React from "react"
import Label from "../Label"
import "../style.css"


function Card(props) {

    return (
        <div className="card mt-10">
            <div className="imgContainer">
                <img className="avatarImg" src={props.image}></img>
            </div>

            <div className="card-body">
                <button id="upload_widget" onClick={props.onClick} className="cloudinary-button">Upload files</button>

                <Label onChange={props.handleChange} className="thisCreateTraits" text={props.avatar.name} traitNumber={props.avatarIndex} />
                <button onClick={props.remover}>Remove this avatar</button>
            </div>
        </div>
    )
}

export default Card;