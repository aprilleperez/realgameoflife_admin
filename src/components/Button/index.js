import React, { Component } from "react";
import '../style.css';


export function Button(props) {
    return (
        <div className="thisButton text-center">
            <button>{props.message}</button>
            {/* <i class={props.class}></i> */}
        </div>
    )
}


export default Button;