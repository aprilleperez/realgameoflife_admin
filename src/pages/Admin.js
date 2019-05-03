import React from 'react';
import { Col, Row, Container } from '../components/Grid';
import { Header, SubHeader } from '../components/Header'
import Content from '../components/Content'


function Admin() {
    return (
        <Container fluid>
            <Header />
            <SubHeader />
            <Content />
        </Container>

    )
}

export default Admin;


{/* <Container fluid>
<Row>
    <Col size="col-md-6"></Col>
</Row>
</Container> */}