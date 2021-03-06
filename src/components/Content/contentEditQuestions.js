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
import { GameObj, Response, Outcome, Question, Traits, templateQuestion } from '../../constructors';
import { all } from 'q';

///////////////////////////////////////////////////////////////////////////////////////////////////

// Binding all methods to our ContentEditQuestions class object
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
        this.removeQuestion = this.removeQuestion.bind(this);
        this.addQuestion = this.addQuestion.bind(this);

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
        const index = this.state.gameObj.questions.map((_q, i) => `Question: ${i + 1}`).indexOf(value)
        console.log("VALUE:", value, "INDEX:", index)
        this.setState({
            questionIndex: index
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

    removeQuestion() {
        const id = this.getGameIdUrl();
        let allNewQs = [...this.state.gameObj.questions]
        console.log("HELLO FROM REMOVE QUESTION", this.state.questionIndex)

        allNewQs.splice(this.state.questionIndex, 1);
        const gameObj = this.state.gameObj
        const newQs = new GameObj(gameObj.name, gameObj.traits, gameObj.avatars, allNewQs)
        dbUpdate(newQs, id)
        console.log("REMOVED QUESTION HAPPENED")
        this.setState({
            gameObj: newQs,
            questionIndex: 0
        })
    }

    addQuestion() {
        const id = this.getGameIdUrl()
        let allNewQs = [...this.state.gameObj.questions]
        console.log("ALL NEW QS", allNewQs)
        let traits = Object.values(this.state.gameObj.traits)
        console.log("THESE ARE THE TRAITS", traits)
        let newQ = templateQuestion(traits)
        console.log("NEW Q", newQ)
        allNewQs.push(newQ)
        console.log("ALL NEW QS", allNewQs)
        const gameObj = this.state.gameObj
        const newQuestions = new GameObj(gameObj.name, gameObj.traits, gameObj.avatars, allNewQs)
        console.log("NEW QUESTIONS TO GO IN DB", newQuestions)
        dbUpdate(newQuestions, id)
        console.log("ADD QUESTION HAPPEND")
        this.setState({
            gameObj: newQuestions,
            questionIndex: newQuestions.questions.length - 1
        })
    }

    render() {
        const gameObj = this.state.gameObj
        if (!gameObj) {
            return (<div></div>)
        }
        const q = { value: `Question: ${this.state.questionIndex + 1}`, onChange: this.handleQuestionDropdown, options: this.state.gameObj.questions.map((_question, i) => `Question: ${i + 1}`) }
        const t1 = { value: this.state.gameObj.questions[this.state.questionIndex].trait1, onChange: partial(this.handleQuestionTraits, "trait1"), options: Object.values(this.state.gameObj.traits) }
        const t2 = { value: this.state.gameObj.questions[this.state.questionIndex].trait2, onChange: partial(this.handleQuestionTraits, "trait2"), options: Object.values(this.state.gameObj.traits) }
        const allProps = { qProps: q, t1Props: t1, t2Props: t2 }

        const enabled = (this.state.gameObj.questions.length > 1)

        return (
            <Container>
                <div className="questionRow">
                    <QuestionDropdown {...allProps} />
                    <Row>

                        <Col size="sm-12">
                            <label for="questionInput" className="qIns qLabel"><strong>Question: </strong></label>
                            <Label className="questionInput" text={this.state.gameObj.questions[this.state.questionIndex].Q} onChange={this.handleQuestionText} />
                            <br></br>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="sm-3">
                            <button className="addQButton" onClick={this.addQuestion}><i class="fas fa-plus"></i> Add Another question</button>
                        </Col>
                        <Col size="sm-3">
                            <button disabled={!enabled} className="removeButton" onClick={this.removeQuestion}><i class="fas fa-trash"></i> Drop Question</button>
                        </Col>
                    </Row>
                </div>

                <br></br>

                {
                    this.state.gameObj.questions[this.state.questionIndex].responses.map((response, i) => (
                        <Container fluid>
                            <Row>
                                <Col size="sm-12">
                                    <p className="qIns"><strong>Choice {i + 1}</strong></p>
                                    <Label text={response.response} onChange={partial(this.handleResponseText, i)} />
                                </Col>
                            </Row>

                            <Row>
                                <Col size="sm-12">
                                    <p className="qIns"><strong>Outcome {i + 1}</strong></p>
                                    <Label text={response.outcomes[0].text} onChange={partial(this.handleOutcomeText, i, 0)} />
                                </Col>
                            </Row>

                            <Row>
                                <Col size="sm-6">
                                    <PointToggler text="Affects Trait" options={Object.values(this.state.gameObj.traits)} value={response.outcomes[0].amount} trait={response.outcomes[0].trait} onChange={
                                        (value) => this.handleOutcomeTrait(i, 0, value)} plus={partial(this.handleTraitAmount, i, 0, response.outcomes[0].amount + 1)} minus={partial(this.handleTraitAmount, i, 0, response.outcomes[0].amount - 1)} />
                                </Col>

                                <Col size="sm-6">
                                    <PointToggler text="Affects Trait" options={Object.values(this.state.gameObj.traits)} value={response.outcomes[1].amount}
                                        trait={response.outcomes[1].trait} onChange={
                                            (value) => this.handleOutcomeTrait(i, 1, value)} plus={partial(this.handleTraitAmount, i, 1, response.outcomes[1].amount + 1)} minus={partial(this.handleTraitAmount, i, 1, response.outcomes[1].amount - 1)} />
                                </Col>
                            </Row>

                            <br></br>
                            <br></br>
                            <hr></hr>

                        </Container>

                    ))
                }
                <br></br>
                <br></br>
                <br></br>
                <AdminButton className="btn btn-danger" text="Done" onClick={this.updateQuestionDb} />
                <br></br>
                <br></br>
                <br></br>
            </Container >
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default ContentEditQuestions;