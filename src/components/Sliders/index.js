import React from "react";
import { Row, Container } from "../Grid"
import ReactSlider from "react-slider"
require('create-react-class');

function Slider(props) {
    return (
        <Container fluid>

            <ReactSlider defaultValue={50}></ReactSlider>

        </Container>
    )

}

export default Slider;