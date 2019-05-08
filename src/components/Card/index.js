import React from "react"

function Card(props) {
    return (
        <div className="card mt-10">
            <div className="img container">
                <img src="/images/avatar.PNG"></img>
            </div>
            <div className="card-body">
                <span> {props.avatar} </span>
            </div>

        </div>
    )
}

export default Card;