import React, { Component } from "react";
import '../style.css';
import { Row, Col } from '../Grid'
import { Dropdown } from '../Dropdown'
import TogglerButton from './togglerButton'
///////////////////////////////////////////////////////////////////////////////////////////////////

export class PointToggler extends Component {
    constructor(props) {
        super(props)


        this.state = {

        }
    }

    render() {

        return (
            <div>
                <Row>
                    <Col size="sm-6">
                        <Dropdown options={this.props.options} value={this.props.trait} onChange={this.props.onChange} />
                    </Col>
                </Row>

                <Row>
                    <Col size="sm-1">
                        <TogglerButton className="fas fa-minus" onClick={this.props.minus} />
                    </Col>

                    <Col size="sm-1">
                        <div className="thisForm score">{this.props.value}</div>
                    </Col>

                    <Col size="sm-1">
                        <TogglerButton className="fas fa-plus" onClick={this.props.plus} />
                    </Col>
                </Row>
            </div>
        )
    }
}



export function PointToggler2(props) {
    return (
        <Row>
            <Col size="sm-1">
                <TogglerButton className="fas fa-minus" onClick={props.minus} />
            </Col>

            <Col size="sm-1">
                <div className="thisForm score">{props.traits} </div>
            </Col>

            <Col size="sm-1">
                <TogglerButton className="fas fa-plus" onClick={props.plus} />
            </Col>
        </Row>
    )
}


///////////////////////////////////////////////////////////////////////////////////////////////////
// export default PointToggler;
