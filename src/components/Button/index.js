import React, { Component } from "react";
import '../style.css';


function AdminButton(props) {

    let className = "thisButton " + props.buttonType;

    return (
        <div className="thisAdminButton">
            <button className={className}>{props.text}</button>
        </div>

    )
}

export default AdminButton;

// export function Button(props) {
//     return (
//         <div className="thisButton text-center">
//             <button>{props.message}</button>
//             {/* <i class={props.class}></i> */}
//         </div>
//     )
// }


// export default Button;