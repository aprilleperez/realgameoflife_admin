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
                <Header text="Edit Avatars for now" />
                <SubHeader text="Avatar Selections" />
                <Content />
                <AdminButton text="Next" buttonType="green" to="/create/questions" />
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

