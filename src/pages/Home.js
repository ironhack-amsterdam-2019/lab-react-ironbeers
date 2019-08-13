import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div>
          <Link to="/beers" />
          <img src="/img/beers.png" alt="Beers" />
          <div className="beerSortDescr">
            <h1>All Beers</h1>
            <span>
              Take a look at our awesome collection of fresh beer. You can find
              all kinds of weird flavours.
            </span>
          </div>
        </div>
        <div>
          <Link to="/randomBeer" />
          <img src="/img/random-beer.png" alt="Random beer" />
          <div className="beerSortDescr">
            <h1>Random Beer</h1>
            <span>
              Feel adventerous today? Check out a random beer out of our collection and let us surprise you with something fresh and original.
            </span>
          </div>
        </div>
        <div>
          <Link to="/newBeer" />
          <img src="/img/new-beer.png" alt="New beer" />
          <div className="beerSortDescr">
            <h1>New Beer</h1>
            <span>
              Got some cool new Beer to add to the collection? Please do so and make your discovery accessible for everyone.
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
