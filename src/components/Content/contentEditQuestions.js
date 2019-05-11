import React, { Component } from 'react';
import { Container, Row, Col } from '../Grid'
import Label from '../Label'
import Dropdown, { QuestionDropdown } from '../Dropdown'
import { PointToggler } from "../PointToggler"
import '../style.css';
import AdminButton from "../Button"
import { Header } from '../Header';
import { findbyId } from '../../utils/lifeAPIController';
import { Response } from '../../constructors';
///////////////////////////////////////////////////////////////////////////////////////////////////


class ContentEditQuestions extends Component {
    constructor(props) {
        super(props)

        this.handleOutcomeTrait = this.handleOutcomeTrait.bind(this);


        this.state = {
            gameObj: null,
            questionIndex: 0
        }
    }

    componentDidMount() {
        this.getGame()
    }

    getGame() {
        findbyId(this.getGameIdUrl())
            .then((results) => {
                this.setState({
                    gameObj: results.data
                })
            })
    }

    getGameIdUrl() {
        const url = window.location.pathname
        const questionIndex = url.indexOf("questions")
        const fromQuestions = url.substring(questionIndex)
        const id = fromQuestions.substring(fromQuestions.indexOf("/") + 1)

        return id
    }

    handleOutcomeTrait(rIndex, oIndex, event) {
        console.log(rIndex, oIndex, event)
        const { name, value } = event.target
        console.log("EVENT STUFF", "NAME:", name, "VALUE:", value)
        let question = this.state.gameObj.questions[this.state.questionIndex]
        let response = question.responses[rIndex]
        let outcome = response.outcomes[oIndex]
        let newOut = { ...outcome, trait: value };
        let newOuts = [...response.outcomes];
        newOuts[oIndex] = newOut;
        let newResp = new Response(response.response, newOuts);
        let newResps = [...question.responses];
        newResps[rIndex] = newResp;
        let newQ = { ...question, responses: newResps };
        let newQuestions = [...this.state.gameObj.questions];
        newQuestions[this.state.questionIndex] = newQ;
        let newWholeFuckingGame = { ...this.state.gameObj, questions: newQuestions }
        this.setState({
            gameObj: newWholeFuckingGame
        })

    }


    onClick = () => {
        // if (className === "fa fa-plus") {
        //     this.setState({
        //         trait1Val: this.state.trait1Val + 1,
        //     })
        // }
        this.setState({
            trait1Val: this.state.trait1Val + 1,
            trait2Val: this.state.trait2Val - 1
        })
    }

    render() {
        const gameObj = this.state.gameObj
        if (!gameObj) {
            return (<div></div>)
        }
        return (
            <Container>
                <Header text="Edit Questions" />
                <QuestionDropdown qtext="Question" text="Trait" />
                <Row>
                    <Col size="sm-12">
                        <Label className="questionInput" text="Type question here" />
                        <hr></hr>
                    </Col>
                </Row>

                <br></br>

                {this.state.gameObj.questions[this.state.questionIndex].responses.map((response, i) => (
                    <Container fluid>
                        <Row>
                            <Col size="sm-6">
                                <Label text={response.response} />
                            </Col>

                            <Col size="sm-6">
                                <Label text={response.outcomes[0].text} />
                            </Col>
                        </Row>

                        <Row>
                            {/* <Col size="sm-2">
                                Affects:
                            </Col> */}

                            <Col size="sm-5">
                                <PointToggler text="Affects Trait" options={Object.values(this.state.gameObj.traits)} value={response.outcomes[0].amount} trait={response.outcomes[0].trait} onChange={
                                    (value) => this.handleOutcomeTrait(i, 0, value)} />
                            </Col>

                            <Col size="sm-5">
                                <PointToggler text="Affects Trait" options={Object.values(this.state.gameObj.traits)} value={response.outcomes[1].amount}
                                    trait={response.outcomes[1].trait} onChange={
                                        (value) => this.handleOutcomeTrait(i, 1, value)} />
                            </Col>
                        </Row>

                        <hr></hr>

                    </Container>
                ))}
                <AdminButton text="Done" buttonType="green" click={() => { }} to="/" />
            </Container>
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default ContentEditQuestions;