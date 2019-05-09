import React, { Component } from 'react';
import { Container } from '../components/Grid';
import { Header, SubHeader, AvatarHeader } from '../components/Header'
import { QuestionDropdown } from '../components/Dropdown'
import Content from '../components/Content'
import AdminButton from '../components/Button'

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
                        {/* <SubHeader text="Update Avatar Selections" /> */}
                        <AvatarHeader />
                        <Content />
                        <AdminButton text="Done" buttonType="green" to="/" />
                    </Container>
                ) : null}
                {window.location.pathname.startsWith("/edit/questions/") ? (
                    <Container fluid>
                        <Header text="Edit Questions" />
                        {/* <SubHeader text="Update Questions Selections" /> */}
                        <QuestionDropdown qtext="Question" text="Trait" />
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

