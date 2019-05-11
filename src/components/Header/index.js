import React from "react";
import '../style.css';
import { Container, Row, Col } from '../Grid'


export function Header(props) {
    return (
        <div className="text-center">
            <h1 className="appHeader">{props.text}</h1>
        </div>
    )
}

export function SubHeader(props) {
    return (
        <div className="text-center">
            <h5 className="appSubHeader">{props.text}</h5>
        </div>
    )
}

export function ContentHeader(props) {
    return (
        <div>
            <h3 className="appContentHeader">{props.text}</h3>
        </div>
    )
}

export function AvatarHeader(props) {
    return (
        <Container fluid>
            <Row>
                <Col size="sm-1">

                </Col>

                <Col size="sm-2">
                    <p className="text-center">Avatar 1</p>
                </Col>

                <Col size="sm-2">
                    <p className="text-center">Avatar 2</p>
                </Col>

                <Col size="sm-2">
                    <p className="text-center">Avatar 3</p>
                </Col>

                <Col size="sm-2">
                    <p className="text-center">Avatar 4</p>
                </Col>

                <Col size="sm-2">
                    <p className="text-center">Avatar 5</p>
                </Col>

                <Col size="sm-1">

                </Col>
            </Row>
        </Container>
    )
}