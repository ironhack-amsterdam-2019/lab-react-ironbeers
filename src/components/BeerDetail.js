import React, { Component } from "react";
import "./BeerDetail.css";
import axios from "axios";

export class BeerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: {},
      loaded: false
    };
  }

  componentDidMount() {
    if (!Object.keys(this.beer).length) {
      if (
        this.props.match &&
        this.props.match.params &&
        this.props.match.params.id
      ) {
        axios
          .get(
              process.env.API_BASE_URL + "/beers/" +
              this.props.match.params.id
          )
          .then(response =>
            this.setState({ beer: response.data, loaded: true })
          )
          .catch(error => this.setState({ error: error }));
      } else {
        axios
          .get(process.env.API_BASE_URL + "/beers/random")
          .then(response =>
            this.setState({ beer: response.data, loaded: true })
          )
          .catch(error => this.setState({ error: error }));
      }
    }
  }

  render() {
    // depending on where the component is rendered from the beer
    //    might be passed through the location or has to be loaded via axios first
    this.beer =
      (this.props.location &&
        this.props.location.state &&
        this.props.location.state.beer) ||
      (this.state.loaded && this.state.beer);
    return (
      <div>
        {this.beer && (
          <div className="BeerDetail">
            <div className="imgWrap">
              <img src={this.beer.image_url} alt={this.beer.name} />
            </div>
            <div className="tag">
              <strong>{this.beer.name}</strong>
              <span>{this.beer.attenuation_level}</span>
            </div>
            <div className="tag">
              <span>{this.beer.tagline}</span>
              <span>{this.beer.first_brewed ? (new Date(this.beer.first_brewed) ? new Date(this.beer.first_brewed).getMonth() + 1 + " / " + new Date(this.beer.first_brewed).getFullYear() : this.beer.first_brewed) : ""}</span>
            </div>
            <p>{this.beer.description}</p>
            <small>{this.beer.contributed_by}</small>
          </div>
        )}
      </div>
    );
  }
}

export default BeerDetail;
