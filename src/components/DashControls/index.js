import React from "react";
import '../style.css';
import { Link } from 'react-router-dom';
///////////////////////////////////////////////////////////////////////////////////////////////////


export function DashControls(props) {
    if (props.to) {
        return (
            <Link to={props.to}><div className="thisControls text-center">
                <i className={props.class}></i>
                <p className="appControls controlsText" to={props.to}>{props.text}</ p>
            </div></Link>
        )
    }
    else {
        return (
            <div className="thisControls text-center">
                <i className={props.class} onClick={props.click}></i>
                <p className="appControls controlsText">{props.text}</ p>
            </div>
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default DashControls;