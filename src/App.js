import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import BeerDetail from "./components/BeerDetail";
import Beers from "./pages/Beers";
import NewBeer from "./pages/NewBeer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/Login" component={Login} />
          <Route path="/beers" component={Beers} />
          <Route path="/randomBeer" component={BeerDetail} />
          <Route path="/newBeer" component={NewBeer} />
          <Route path="/beer/:id" component={BeerDetail} />
          <Route path="/" render={() => <p>404 - Beer not found</p>} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default hot(module)(App);
