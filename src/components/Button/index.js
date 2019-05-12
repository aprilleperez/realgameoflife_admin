import React from "react";
import '../style.css';
import { Link } from 'react-router-dom';


function AdminButton(props) {

    // let className = "thisButton " + props.buttonType;

    return (
        <div className="appAdminButton">
            {/* <Link to={props.to}><button className="appButton">{props.text}</button></Link> */}
            {/* className={className} */}

            <button className="appButton" buttonType={props.buttonType} onClick={props.onClick}>{props.text}</button>
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