import React, { Component } from "react";
import '../style.css';

// TODO: Change to class component
// TODO: GET HEADERS TO DYNAMICALLY UPDATE BASED ON CURRENT PAGE (HTTP) (refer to commented out stuff below)

export function Header(props) {
    return (
        <div className="text-center">
            <h1 className="thisHeader">{props.text}</h1>
        </div>
    )
}

export function SubHeader(props) {
    return (
        <div className="text-center">
            <h5 className="thisSubHeader">{props.text}</h5>
        </div>
    )
}

export function ContentHeader(props) {
    return (
        <div>
            <h3 className="thisContentHeader">{props.text}</h3>
        </div>
    )
}

// className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
// export default Header;