import React from "react"
import Label from "../Label"


function Card(props) {
    console.log(props.inputValue)
    return (
        <div className="card mt-10">
            <div className="img container">
                <img src="/images/avatar.PNG"></img>
            </div>
            <div className="card-body">

                <Label onChange={props.handleChange} className="thisCreateTraits" text={props.avatar} traitName={() => { props.onChange() }} traitNumber="Name" inputValue={props.inputValue} />
            </div>

        </div>
    )
}

export default Card;