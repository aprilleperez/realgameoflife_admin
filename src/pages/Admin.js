import React, { Component } from 'react';
import * as Controller from "../utils/lifeAPIController";
import { testDataObject, updateGameObj } from "../constructors"
import { Container } from '../components/Grid';
import { Header, SubHeader } from '../components/Header'
import Content from '../components/Content'
import AdminButton from '../components/Button'

///////////////////////////////////////////////////////////////////////////////////////////////////


class Admin extends Component {

    render() {
        return (
            < Container fluid >
                <Header text={`Welcome to the dashboard, ${this.props.globalState.organization}.`} />
                <SubHeader text="Create, Edit, or Drop games for your organization!" />
                <Content gameNameGameId={this.props.globalState.gameNameGameId} everyGame={this.props.globalState.allGames} />
                <AdminButton text="Create Game" buttonType="green" to="/create" />
                {/* <AdminButton text="Edit" buttonType="blue" to="/edit" /> */}

                <button className="btn btn-primary" type="button" onClick={() => Controller.update(updateGameObj, "5ccf266b84b9a54c70ed7ba9")}>Update</button>
                <button className="btn btn-danger" type="button" onClick={() => Controller.create(testDataObject)}>Create</button>

            </Container >
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default Admin;




