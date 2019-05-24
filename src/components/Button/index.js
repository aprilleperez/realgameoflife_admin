import React from "react";
import '../style.css';

function AdminButton(props) {

    // let className = "thisButton " + props.buttonType;

    return (
        <div className="appAdminButton">


            <button className="appButton" buttonType={props.buttonType} onClick={props.onClick}>{props.text}</button>
        </div>

    )
}

export default AdminButton;






