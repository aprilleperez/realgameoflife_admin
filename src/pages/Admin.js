import React, { Component } from 'react';
import { Container } from '../components/Grid';
import { Header, SubHeader } from '../components/Header'
import Content from '../components/Content'
import AdminButton from '../components/Button'
import '../components/style.css'
///////////////////////////////////////////////////////////////////////////////////////////////////


class Admin extends Component {

    render() {
        return (
            < Container fluid >
                <div className="appHero">
                    <Header text={`Welcome to the dashboard, ${this.props.globalState.organization}.`} />
                    <SubHeader text="Create, Edit, or Drop games for your organization!" />
                </div>
                <Content gameNameGameId={this.props.globalState.gameNameGameId} everyGame={this.props.globalState.allGames} />
                <AdminButton text="Create Game" onClick={() => this.props.history.push(`/create`)} />
                <br></br>
                <br></br>
                <br></br>
            </Container >
        )
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default Admin;








