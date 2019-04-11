import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Protected from "./components/Protected";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>
          <header className="App-header">Friend App</header>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/protected" component={Protected} />
        </div>
      </Router>
    );
  }
}

const mstp = function(state) {
  return {
    name: state.name,
    friends: state.friends
  };
};
export default connect(mstp)(App);
