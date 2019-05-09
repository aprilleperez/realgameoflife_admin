import React, { Component } from 'react';
import ContentAdmin from './contentAdmin';
import ContentCreate from './contentCreate';
import ContentCreateAvatars from './contentCreateAvatars';
import ContentCreateQuestions from './contentCreateQuestions';
import ContentEdit from './contentEdit';
import ContentEditQuestions from './contentEditQuestions';
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
                    <ContentAdmin games={this.props.gameNameGameId} />
                ) : null}
                {window.location.pathname === "/create" ? (
                    <ContentCreate />
                ) : null}
                {window.location.pathname === "/create/avatars" ? (
                    <ContentCreateAvatars />
                ) : null}
                {window.location.pathname === "/create/questions" ? (
                    <ContentCreateQuestions />
                ) : null}
                {window.location.pathname.startsWith("/edit/avatars/") ? (
                    <ContentEdit globalState={this.props.globalState} />
                ) : null}
                {window.location.pathname.startsWith("/edit/questions/") ? (
                    <ContentEditQuestions />
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