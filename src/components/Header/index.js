import React, { Component } from "react";
import '../style.css';


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