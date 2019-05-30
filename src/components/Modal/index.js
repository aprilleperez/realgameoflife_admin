import React from "react"
import { Modal, Button } from "react-bootstrap"



let gettingStartedText = <div> <p className="modal=text">In Their Shoes is a question and response game similar to the game of life designed to be used as a conversation starter for issues around privelge. As a creator, you get to tell the stories YOU want to tell, and show how the decisions we all make in our lives can depend so much on the resources and community available to us.</p>

    <p className="modal=text">The game is centered on 5 <strong>TRAITS</strong>. These traits impact every aspect of the game. For example, in the basic default game, these traits are: <i>Trait1, Trait2, Trait3, Trait4, Trait5</i>.</p>

    <p className="modal=text">As a creator, you decide which traits your game is based on. Once you've decided on your traits, they will become <strong>LOCKED IN</strong>, and the only part of your game you won't be able to edit later.</p></div>

let avatarText = <div><p className="modal=text">Every <strong>AVATAR</strong> has all 5 traits, but you decide how much based on a scale of 1-20 (where 1 is the lowest and 20 the highest). How much an avatar has of a certain trait affects which responses are available to them at certain questions in the game.</p>

    <p className="modal=text">For example, in the basic default game, an avatar with a low <i>Trait1</i> and medium <i>Trait2</i> might only be able to select 3 of the 5 responses to a question. You are also able to upload an image for each avatar.</p></div>

let questionText = <div><p className="modal=text"><strong>QUESTIONS</strong> are weighted by 2 traits. These are the traits that determine how many <strong>RESPONSES</strong> a player can select. All avatars are able to select at least the first response, but it would take a high score to be able to select all 5 responses.</p>

    <p className="modal=text">You can create as many or as few questions as you want, but all questions have 5 responses.</p></div>

let responsesText = <div><p className="modal=text">Every question has 5 <strong>RESPONSES</strong> players can choose in answer to a question. Each response has an <strong>OUTCOME</strong>. Outcomes can either increase or decrease up to 2 of an avatar's traits.</p>

    <p className="modal=text">For example, in the basic default game, a question about attending college might affect an avatar's wealth and education traits by decreasing wealth (<i>hello student loans!</i>) and increasing education.</p></div>

let endingText = <div><p className="modal=text">Once all the questions have been answered, player's can see how well (or not well) their avatars did compared to others. A great conversation starter!</p></div>

let instructions = [gettingStartedText, avatarText, questionText, responsesText, endingText]

let instructionHeaders = ["Getting Started", "Avatars", "Questions", "Responses", "End of the Game"]



export class MyVerticallyCenteredModal extends React.Component {
    constructor(props) {
        super(props)

        this.nextInstruction = this.nextInstruction.bind(this);

        this.state = {
            instructionsIndex: 0,
            instructionHeadersIndex: 0,
            showNextButton: true
        }
    }

    nextInstruction() {
        if (this.state.instructionsIndex < instructions.length - 1) {
            let show = this.state.instructionsIndex + 1 < instructions.length - 1
            this.setState({
                instructionsIndex: this.state.instructionsIndex + 1,
                instructionHeadersIndex: this.state.instructionsIndex + 1,
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
                        {instructionHeaders[this.state.instructionHeadersIndex]}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{instructions[this.state.instructionsIndex]}</p>
                    {this.state.showNextButton ?
                        <button className="helpButton" onClick={this.nextInstruction}>More instructions</button>
                        : <div></div>}
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer> */}
            </Modal>
        );
    }
}