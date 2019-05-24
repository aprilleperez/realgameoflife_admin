import React, { Component } from 'react';
import { Container, Row, Col } from '../Grid'
import Label from '../Label'
import { QuestionDropdown } from '../Dropdown'
import { PointToggler } from "../PointToggler"
import '../style.css';
import AdminButton from "../Button"
import { findbyId } from '../../utils/lifeAPIController';
import update from "immutability-helper"
import { partial } from "../../utils/partials"
import { update as dbUpdate } from "../../utils/lifeAPIController"

///////////////////////////////////////////////////////////////////////////////////////////////////


class ContentEditQuestions extends Component {
    constructor(props) {
        super(props)

        this.handleOutcomeTrait = this.handleOutcomeTrait.bind(this);
        this.handleTraitAmount = this.handleTraitAmount.bind(this);
        this.handleOutcomeText = this.handleOutcomeText.bind(this);
        this.handleResponseText = this.handleResponseText.bind(this);
        this.handleQuestionText = this.handleQuestionText.bind(this);
        this.handleQuestionTraits = this.handleQuestionTraits.bind(this);
        this.handleQuestionDropdown = this.handleQuestionDropdown.bind(this);
        this.updateQuestionDb = this.updateQuestionDb.bind(this);

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

    handleTraitAmount(rIndex, oIndex, value) {
        console.log(rIndex, oIndex, value)
        let gameObj = this.state.gameObj
        let newGameObj = update(gameObj, {
            questions: {
                [this.state.questionIndex]:
                {
                    responses: {
                        [rIndex]:
                        {
                            outcomes: {
                                [oIndex]:
                                    { amount: { $set: value } }
                            }
                        }
                    }
                }
            }
        })
        this.setState({
            gameObj: newGameObj
        })
    }

    handleOutcomeTrait(rIndex, oIndex, event) {
        console.log(rIndex, oIndex, event)
        const { name, value } = event.target

        console.log("EVENT STUFF", "NAME:", name, "VALUE:", value)
        let gameObj = this.state.gameObj
        let newGameObj = update(gameObj, {
            questions: {
                [this.state.questionIndex]:
                {
                    responses: {
                        [rIndex]:
                        {
                            outcomes: {
                                [oIndex]:
                                    { trait: { $set: value } }
                            }
                        }
                    }
                }
            }
        })
        this.setState({
            gameObj: newGameObj
        })
    }

    handleOutcomeText(rIndex, oIndex, event) {
        console.log(rIndex, oIndex, event)
        const { name, value } = event.target

        console.log("EVENT STUFF", "NAME:", name, "VALUE:", value)
        let gameObj = this.state.gameObj
        let newGameObj = update(gameObj, {
            questions: {
                [this.state.questionIndex]:
                {
                    responses: {
                        [rIndex]:
                        {
                            outcomes: {
                                [oIndex]:
                                    { text: { $set: value } }
                            }
                        }
                    }
                }
            }
        })
        this.setState({
            gameObj: newGameObj
        })
    }

    handleResponseText(rIndex, event) {
        console.log(rIndex, event)
        const { name, value } = event.target

        console.log("EVENT STUFF", "NAME:", name, "VALUE:", value)
        let gameObj = this.state.gameObj
        let newGameObj = update(gameObj, {
            questions: {
                [this.state.questionIndex]:
                {
                    responses: {
                        [rIndex]:

                            { response: { $set: value } }

                    }
                }
            }
        })
        this.setState({
            gameObj: newGameObj
        })

    }
    handleQuestionText(event) {
        console.log(event)
        const { value } = event.target

        let gameObj = this.state.gameObj
        let newGameObj = update(gameObj, {
            questions: {
                [this.state.questionIndex]:

                    { Q: { $set: value } }

            }
        })
        this.setState({
            gameObj: newGameObj
        })

    }

    handleQuestionTraits(whichTrait, event) {
        const { value } = event.target
        let gameObj = this.state.gameObj
        let newGameObj = update(gameObj, {
            questions: {
                [this.state.questionIndex]:

                    { [whichTrait]: { $set: value } }

            }
        })
        this.setState({
            gameObj: newGameObj
        })
    }

    handleQuestionDropdown(event) {
        const { value } = event.target
        this.setState({
            questionIndex: value
        })
    }


    updateQuestionDb() {
        const id = this.getGameIdUrl()
        console.log("HELLO FROM UPDATE QUESTION DB", id)
        const gameObj = this.state.gameObj
        dbUpdate(gameObj, id).then(() => {
            this.props.history.push(`/`)
        })
    }

    //     let question = this.state.gameObj.questions[this.state.questionIndex]
    //     let response = question.responses[rIndex]
    //     let outcome = response.outcomes[oIndex]
    //     let newOut = { ...outcome, trait: value };
    //     let newOuts = [...response.outcomes];
    //     newOuts[oIndex] = newOut;
    //     let newResp = new Response(response.response, newOuts);
    //     let newResps = [...question.responses];
    //     newResps[rIndex] = newResp;
    //     let newQ = { ...question, responses: newResps };
    //     let newQuestions = [...this.state.gameObj.questions];
    //     newQuestions[this.state.questionIndex] = newQ;
    //     let newWholeFuckingGame = { ...this.state.gameObj, questions: newQuestions }
    //     this.setState({
    //         gameObj: newWholeFuckingGame
    //     })



    render() {
        const gameObj = this.state.gameObj
        if (!gameObj) {
            return (<div></div>)
        }
        const q = { value: this.state.questionIndex, onChange: this.handleQuestionDropdown, options: Object.keys(this.state.gameObj.questions) }
        const t1 = { value: this.state.gameObj.questions[this.state.questionIndex].trait1, onChange: partial(this.handleQuestionTraits, "trait1"), options: Object.values(this.state.gameObj.traits) }
        const t2 = { value: this.state.gameObj.questions[this.state.questionIndex].trait2, onChange: partial(this.handleQuestionTraits, "trait2"), options: Object.values(this.state.gameObj.traits) }
        const allProps = { qProps: q, t1Props: t1, t2Props: t2 }
        return (
            <Container>
                <div className="questionRow">
                    <QuestionDropdown {...allProps} />
                    <Row>
                        <Col size="sm-12">
                            <label for="questionInput" className="qIns qLabel"><strong>Question: </strong></label>
                            <Label className="questionInput" text={this.state.gameObj.questions[this.state.questionIndex].Q} onChange={this.handleQuestionText} />
                            <br></br>
                            {/* <hr></hr> */}
                        </Col>
                    </Row>
                </div>

                <br></br>

                {
                    this.state.gameObj.questions[this.state.questionIndex].responses.map((response, i) => (
                        <Container fluid>
                            <Row>
                                <Col size="sm-6">
                                    <p className="qIns"><strong>Response {i + 1}</strong></p>
                                    <Label text={response.response} onChange={partial(this.handleResponseText, i)} />
                                </Col>

                                <Col size="sm-6">
                                    <p className="qIns"><strong>Outcome {i + 1}</strong></p>
                                    <Label text={response.outcomes[0].text} onChange={partial(this.handleOutcomeText, i, 0)} />
                                </Col>
                            </Row>

                            <Row>
                                <Col size="sm-5">
                                    <PointToggler text="Affects Trait" options={Object.values(this.state.gameObj.traits)} value={response.outcomes[0].amount} trait={response.outcomes[0].trait} onChange={
                                        (value) => this.handleOutcomeTrait(i, 0, value)} plus={partial(this.handleTraitAmount, i, 0, response.outcomes[0].amount + 1)} minus={partial(this.handleTraitAmount, i, 0, response.outcomes[0].amount - 1)} />
                                </Col>

                                <Col size="sm-5">
                                    <PointToggler text="Affects Trait" options={Object.values(this.state.gameObj.traits)} value={response.outcomes[1].amount}
                                        trait={response.outcomes[1].trait} onChange={
                                            (value) => this.handleOutcomeTrait(i, 1, value)} plus={partial(this.handleTraitAmount, i, 1, response.outcomes[1].amount + 1)} minus={partial(this.handleTraitAmount, i, 1, response.outcomes[1].amount - 1)} />
                                </Col>
                            </Row>

                            <hr></hr>

                        </Container>
                    ))
                }
                {/* <AdminButton text="Done" buttonType="green" click={() => { }} to="/" /> */}
                <br></br>
                <br></br>
                <br></br>
                <AdminButton className="btn btn-danger" text="Save Questions" onClick={this.updateQuestionDb} />
                <br></br>
                <br></br>
                <br></br>
            </Container >
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default ContentEditQuestions;