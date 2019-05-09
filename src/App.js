import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from "./components/Nav";
import Admin from "./pages/Admin";
import Create from "./pages/Create";
import Edit from "./pages/Edit"
import './App.css';
///////////////////////////////////////////////////////////////////////////////////////////////////


class App extends Component {
  state = {
    gameObj: []
  }
  
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Admin} />
            <Route prefix path="/create" component={Create} game={this.state.gameObj} />
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