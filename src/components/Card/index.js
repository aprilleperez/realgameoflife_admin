import React from "react"
import Label from "../Label"
import { Avatar } from "../../constructors";

function Card(props) {
    return (
        <div className="card mt-10">
            <div className="img container">
                <img src="/images/avatar.PNG"></img>
            </div>
            <div className="card-body">
                <Label onChange={() => console.log("Hello from Label")} className="thisCreateTraits" text={props.avatar} traitName={props.avatar} traitNumber="Name" />
            </div>

        </div>
    )
}

export default Card;