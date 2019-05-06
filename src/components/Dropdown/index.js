import React, { Component } from "react";
import '../style.css';

// TODO: ADD IN FUNCTION TO LINK TO GAME INSTANCE

export function Dropdown() {
    return (
        <div class="dropdown">
            <button class="dropbtn">Dropdown</button>
            <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
    )
}


export default Dropdown;