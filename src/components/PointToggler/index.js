import React from "react";
import '../style.css';

import { Row, Col } from '../Grid'
import Dropdown from '../Dropdown'
import TogglerButton from './togglerButton'
///////////////////////////////////////////////////////////////////////////////////////////////////


function PointToggler(props) {
    return (
        <Row>
            <Col size="sm-6">
                <Dropdown text={props.text} value={props.traits} />
            </Col>

            <Col size="sm-1">
                <TogglerButton className="fas fa-plus" />
            </Col>

            <Col size="sm-1">
                <div className="thisForm score">{props.traits} </div>
            </Col>

            <Col size="sm-1">
                <TogglerButton className="fas fa-minus" />
            </Col>
        </Row>
    )

}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default PointToggler;



{/* <Col size="sm-4">
<TogglerButton className="fas fa-plus" />
<div className="thisForm">hi</div>
<TogglerButton className="fas fa-minus" />
</Col> */}