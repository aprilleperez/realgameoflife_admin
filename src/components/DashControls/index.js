import React from "react";
import '../style.css';

// TODO: ADD IN FUNCTION TO LINK TO GAME INSTANCE

export function DashControls(props) {
    if (props.href) {
        return (
            <a href={props.href}><div className="thisControls text-center">
                <i className={props.class}></i>
                <p>{props.text}</ p>
            </div></a>
        )
    }
    else {
        return (
            <div className="thisControls text-center">
                <i className={props.class} onClick={props.click}></i>
                <p>{props.text}</ p>
            </div>
        )
    }
}


export default DashControls;