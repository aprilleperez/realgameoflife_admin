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
        console.log("WINDOW LOCATION PATHNAME", window.location.pathname);
        return (
            <div className="thisContent fluid">
                {window.location.pathname === `${process.env.PUBLIC_URL}/` ? (
                    <ContentAdmin games={this.props.gameNameGameId} />
                ) : null}
                {window.location.pathname === `${process.env.PUBLIC_URL}/create` ? (
                    <ContentCreate history={this.props.history} />
                ) : null}
                {window.location.pathname.startsWith(`${process.env.PUBLIC_URL}/create/avatars`) ? (
                    <ContentCreateAvatars history={this.props.history} />
                ) : null}
                {window.location.pathname.startsWith(`${process.env.PUBLIC_URL}/create/questions`) ? (
                    <ContentCreateQuestions history={this.props.history} />
                ) : null}
                {window.location.pathname.startsWith(`${process.env.PUBLIC_URL}/edit/avatars/`) ? (
                    <ContentEdit globalState={this.props.globalState} history={this.props.history} />
                ) : null}
                {window.location.pathname.startsWith(`${process.env.PUBLIC_URL}/edit/questions/`) ? (
                    <ContentEditQuestions history={this.props.history} />
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