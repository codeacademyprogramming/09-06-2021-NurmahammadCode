import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CreditCard from "./components/CreditCard";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import SignIn from "./components/Login";
import SignUp from "./components/SignUp";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={CreditCard} />
          <PrivateRoute path="/addCard" component={CreditCard} />
          <Route path="/login" component={SignIn} />
          <Route path="/registiration" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
