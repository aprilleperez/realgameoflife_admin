import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from "./components/Nav";
import Admin from "./pages/Admin";
import Create from "./pages/Create";
import Edit from "./pages/Edit"
import axios from "axios"
import './App.css';
///////////////////////////////////////////////////////////////////////////////////////////////////


class App extends Component {
  state = {
    organization: "Nonprofit Organization Name",
    gameNameGameId: [],
    currentGameId: undefined,
    allGames: []
    // TODO: figure out user state here
  }

  componentDidMount() {
    this.getAllGames();
  }

  getAllGames() {

    axios.get("https://real-life-api.herokuapp.com/api/games")
      .then((results) => {
        console.log("RESULTS.DATA", results.data)
        let gameNameGameId = []
        let nonprofitName = ""

        for (let i = 0; i < results.data.length; i++) {
          let gameObj = {
            gameId: results.data[i]._id,
            gameName: results.data[i].name
          }
          nonprofitName = "We Need To Get the Name Somehow"
          gameNameGameId.push(gameObj)

        }
        console.log("GAME NAME AND ID:", gameNameGameId)

        this.setState({
          organization: nonprofitName,
          gameNameGameId: gameNameGameId,
          allGames: results.data
        })
      })
  }
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" render={(props) => <Admin {...props} globalState={this.state} />} />
            <Route prefix path="/create" render={(props) => <Create {...props} globalState={this.state} />} />
            <Route prefix path="/edit" render={(props) => <Edit {...props} globalState={this.state} />} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default App;