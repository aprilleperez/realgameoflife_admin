import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ContentAdmin from './contentAdmin';
import ContentCreate from './contentCreate';
import ContentEdit from './contentEdit';
import '../style.css';
///////////////////////////////////////////////////////////////////////////////////////////////////


class Content extends Component {
    // state = {

    // }

    render() {
        console.log(window.location.pathname);
        return (
            <div className="thisContent fluid">
                {window.location.pathname === "/" ? (
                    <ContentAdmin games={this.props.games} />
                ) : null}
                {window.location.pathname === "/create" ? (
                    <ContentCreate />
                ) : null}
                {window.location.pathname.startsWith("/edit") ? (
                    <ContentEdit />
                ) : null}
            </div>
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default Content;






// OLD TERNARY
// {window.location.pathname === "/" ? (
//     <ContentAdmin />
// ) : "/create" ? (
//     <ContentCreate />
// ) : "/edit" ? (
//     <ContentEdit />
// ) : (
//     <p>Nothing here</p>
//     )}