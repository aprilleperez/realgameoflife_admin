import React from "react"
import Label from "../Label"


function Card(props) {

    return (
        <div className="card mt-10">
            <div className="img container">
                <img src="/images/avatar.PNG"></img>
            </div>
            <div className="card-body">

                <Label onChange={props.handleChange} className="thisCreateTraits" text={props.avatar.name} traitNumber={props.avatarIndex} />
            </div>

        </div>
    )
}

export default Card;