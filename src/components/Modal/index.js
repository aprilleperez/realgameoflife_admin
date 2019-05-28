import React from "react"
import { Modal, Button } from "react-bootstrap"

let instructions = ["Test Instructions Page 1", "Test Instructions Page 2", "Test Instructions Page 3", "Test Instructions Page 4"]

export class MyVerticallyCenteredModal extends React.Component {
    constructor(props) {
        super(props)

        this.nextInstruction = this.nextInstruction.bind(this);

        this.state = {
            instructionsIndex: 0,
            showNextButton: true
        }
    }

    nextInstruction() {
        if (this.state.instructionsIndex < instructions.length - 1) {
            let show = this.state.instructionsIndex + 1 < instructions.length - 1
            this.setState({
                instructionsIndex: this.state.instructionsIndex + 1,
                showNextButton: show
            })
        }
    }

    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{instructions[this.state.instructionsIndex]}</p>
                    {this.state.showNextButton ?
                        <button onClick={this.nextInstruction}>Next</button>
                        : <div></div>}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}