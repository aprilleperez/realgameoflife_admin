import React, { Component } from 'react';
import * as Controller from "../utils/lifeAPIController";
import { testGameObj, updateGameObj } from "../constructors"
import { Link } from 'react-router-dom';

import { Col, Row, Container } from '../components/Grid';
import { Header, SubHeader } from '../components/Header'
import Content from '../components/Content'
import AdminButton from '../components/Button'
import axios from 'axios';

function test(results) {
    console.log(results)
}

class Admin extends Component {
    state = {
        organization: "Nonprofit Organization Name",
        allGameIds: [],
        allGameNames: []

        // TODO: figure out user state here
    }

    componentDidMount() {
        this.getTestGames();
    }

    // getAllGames() {
    //     let config = {
    //         headers: {
    //             "Access-Control-Allow-Origin": "*"
    //         }
    //     }
    //     axios.get("https://real-life-api.herokuapp.com/api/games", config)
    //         .then(test)
    // }

    getTestGames() {
        let allGameIds = ["t3st", "123go", "55ff73829"]
        let allGameNames = ["Testing Game Name", "This is a test", "America's Ass"]
        let nonprofitName = "Fake Nonprofit"

        this.setState({
            organization: nonprofitName,
            allGameIds: allGameIds,
            allGameNames: allGameNames
        })
    }

    render() {
        return (
            <Container fluid>
                <Header text={`Welcome to the dashboard, ${this.state.organization}.`} />
                <SubHeader text="Create, Edit, or Drop games for your organization!" />
                <Content />
                <AdminButton text="Create" buttonType="green" to="/create" />
                <AdminButton text="Edit" buttonType="blue" to="/edit" />
                <button className="btn btn-primary" type="button" onClick={() => Controller.update(updateGameObj, "5ccf266b84b9a54c70ed7ba9")}>Update</button>
                <button className="btn btn-danger" type="button" onClick={() => Controller.create(testGameObj)}>Create</button>
                <button className="btn btn-danger" type="button" onClick={() => Controller.remove()}>Delete Game</button>
            </Container>
        )
    }
}

export default Admin;




