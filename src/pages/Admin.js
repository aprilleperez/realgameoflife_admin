import React, { Component } from 'react';
import * as Controller from "../utils/lifeAPIController";
import { testGameObj, updateGameObj } from "../constructors"
import { Container } from '../components/Grid';
import { Header, SubHeader } from '../components/Header'
import Content from '../components/Content'
import AdminButton from '../components/Button'
import axios from 'axios';
///////////////////////////////////////////////////////////////////////////////////////////////////


class Admin extends Component {
    state = {
        organization: "Nonprofit Organization Name",
        allGameInfo: []

        // TODO: figure out user state here
    }

    componentDidMount() {
        this.getAllGames();
    }

    getAllGames() {

        axios.get("https://real-life-api.herokuapp.com/api/games")
            .then((results) => {
                console.log(results.data)
                let allGameInfo = []
                let nonprofitName = ""
                for (let i = 0; i < results.data.length; i++) {
                    let gameObj = {
                        gameId: results.data[i]._id,
                        gameName: results.data[i].name
                    }
                    nonprofitName = "We Need To Get the Name Somehow"
                    allGameInfo.push(gameObj)

                }
                console.log("allGameInfo:", allGameInfo)
                console.log(allGameInfo)


                this.setState({
                    organization: nonprofitName,
                    allGameInfo: allGameInfo
                })
            })
    }



    render() {
        return (
            <Container fluid >
                <Header text={`Welcome to the dashboard, ${this.state.organization}.`} />
                <SubHeader text="Create, Play, Edit, or Drop games for your organization!" />
                <Content games={this.state.allGameInfo} />
                <AdminButton text="Create Game" buttonType="green" to="/create" />
                {/* <AdminButton text="Edit" buttonType="blue" to="/edit" /> */}

                <button className="btn btn-primary" type="button" onClick={() => Controller.update(updateGameObj, "5ccf266b84b9a54c70ed7ba9")}>Update</button>
                <button className="btn btn-danger" type="button" onClick={() => Controller.create(testGameObj)}>Create</button>
                <button className="btn btn-danger" type="button" onClick={() => Controller.remove()}>Delete Game</button>
            </Container >
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default Admin;




