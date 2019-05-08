import React, { Component } from 'react';
import * as Controller from "../utils/lifeAPIController";
import { testGameObj, updateGameObj } from "../constructors"

import { Col, Row, Container } from '../components/Grid';
import { Header, SubHeader } from '../components/Header'
import Content from '../components/Content'
import AdminButton from '../components/Button'
import Avatars from "../components/Avatars"
///////////////////////////////////////////////////////////////////////////////////////////////////


class Edit extends Component {
    // state = {

    // }

    render() {
        return (
            <Container fluid>
                {window.location.pathname.startsWith("/edit/avatars/") ? (
                    <Container fluid>
                        <Header text="Edit Avatars" />
                        <SubHeader text="Update Avatar Selections" />
                        <Content />
                        <AdminButton text="Done" buttonType="green" to="/" />
                    </Container>
                ) : null}
                {window.location.pathname.startsWith("/edit/questions/") ? (
                    <Container fluid>
                        <Header text="Edit Questions" />
                        <SubHeader text="Update Questions Selections" />
                        <Content />
                        <AdminButton text="Done" buttonType="green" to="/" />
                    </Container>
                ) : null}
            </Container>
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default Edit;




// function Edit() {
//     return (
//         <Container fluid>
//             <Header text="Edit Avatars for now" />
//             <SubHeader text="Avatar Selections" />
//             <Content />
//             <AdminButton text="Next" buttonType="green" to="/create/questions" />
//         </Container>
//     )
// }

// export default Edit;

