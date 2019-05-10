import React from "react";
import '../style.css';
import Button from 'react-bootstrap/Button';
///////////////////////////////////////////////////////////////////////////////////////////////////


function TogglerButton(props) {
    return (
        <Button className="togglerButton">
            <i className={props.className} onClick={() => { console.log(props); props.updater("Test Update Name", "Wealth", 99) }}></i>
        </Button>
    )
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default TogglerButton;