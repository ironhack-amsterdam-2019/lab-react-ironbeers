import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BeerItem.css";

export class BeerItem extends Component {
  render() {
    let beer = this.props.beer;
    return (
      <div className="BeerItem" key={beer._id}>
        <Link
          to={{
            pathname: "/beer/" + beer._id,
            state: {
              beer: beer
            }
          }}
        />
        <div className="imgWrap">
          <img src={beer.image_url} alt={beer.name} />
        </div>
        <strong>{beer.name}</strong>
        <p>{beer.tagline}</p>
      </div>
    );
  }
}

export default BeerItem;
