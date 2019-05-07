import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from "./components/Nav";
import Admin from "./pages/Admin";
import Create from "./pages/Create";
import Edit from "./pages/Edit"
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Admin} />
          <Route exact path="/create" component={Create} />
          <Route prefix path="/edit" component={Edit} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}


export default App;