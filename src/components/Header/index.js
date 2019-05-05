import React, { Component } from "react";
import '../style.css';

// TODO: Change to class component
// TODO: GET HEADERS TO DYNAMICALLY UPDATE BASED ON CURRENT PAGE (HTTP) (refer to commented out stuff below)

export function Header() {
    return (
        <div className="text-center">
            <h1 className="thisHeader">Admin Homepage Header</h1>
        </div>
    )
}

export function SubHeader() {
    return (
        <div className="text-center">
            <h5 className="thisSubHeader">Play, Edit, Build, or Drop a game!</h5>
        </div>
    )
}

export function ContentHeader() {
    return (
        <div>
            <h3 className="thisContentHeader">Game 1: Yayay this is fun</h3>
        </div>
    )
}

// className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
// export default Header;