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
    allGameInfo: [],
    currentGameId: undefined,
    gamesById: {} // key is a game id, value is the game object, so state.gamesById[state.currentGameId] will give the current game
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
        let gameMap = {}
        for (let i = 0; i < results.data.length; i++) {
          let gameObj = {
            gameId: results.data[i]._id,
            gameName: results.data[i].name
          }
          gameMap[results.data[i]._id] = results.data[i];
          nonprofitName = "We Need To Get the Name Somehow"
          allGameInfo.push(gameObj)

        }
        console.log("allGameInfo:", allGameInfo)
        console.log(allGameInfo)
        console.log(gameMap)

        this.setState({
          organization: nonprofitName,
          allGameInfo: allGameInfo,
          gamesById: gameMap
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
            <Route prefix path="/create" component={Create} />
            <Route prefix path="/edit" component={Edit} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>
    );
  }

}


///////////////////////////////////////////////////////////////////////////////////////////////////
export default App;