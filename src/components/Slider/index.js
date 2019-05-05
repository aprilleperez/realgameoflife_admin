import React, { Component } from "react";
import '../style.css';
import InputRange from 'react-input-range';


class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 10
        };
    }

    render() {
        return (
            <form className="slider">
                <InputRange
                    maxValue={20}
                    minValue={1}
                    value={this.state.value}
                    onChange={value => this.setState({ value })}
                    onChangeComplete={value => console.log(value)} />
            </form>
        );
    }
}




// class Slider extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             value: { min: 2, max: 10 },
//         };
//     }

//     render() {
//         return (
//             <InputRange
//                 maxValue={20}
//                 minValue={0}
//                 value={this.state.value}
//                 onChange={value => this.setState({ value })} />
//         );
//     }
// }

export default Slider;