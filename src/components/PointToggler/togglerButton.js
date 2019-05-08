import React, { Component } from "react";
import '../style.css';
import Button from 'react-bootstrap/Button';
///////////////////////////////////////////////////////////////////////////////////////////////////


function TogglerButton(props) {
    return (
        <Button className="togglerButton">
            <i class={props.className}></i>
        </Button>
    )
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default TogglerButton;