import React, { Component } from "react";
import "./Beers.css";
import axios from "axios";
import BeerItem from "../components/BeerItem";
var qs = require("querystring");

export class Beers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      loaded: false,
      searchResults: [],
      search: ""
    };
  }

  /**
   * Only load the beers once, then pass it on
   */
  componentDidMount() {
    axios
      .get(process.env.API_BASE_URL + "/beers")
      .then(response => {
        this.setState({
          beers: response.data,
          loaded: true,
          searchResults: response.data
        });
      })
      .catch(error => this.setState({ error: error }));
  }

  search(e) {
    e.preventDefault();
    if (e.currentTarget.value.trim().length < 1) {
      this.setState({ searchResults: [...this.state.beers], search: "" });
      return;
    }
    //! The API is giving back weird search results... falling back to fiter
    /*
    let url =
      process.env.API_BASE_URL +
      "/beers/search?" +
      qs.stringify({ q: e.currentTarget.value.trim() });
    axios({
      method: "GET",
      url: url
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });*/
    let search = e.currentTarget.value.trim().toLowerCase();
    let results = this.state.beers.filter(
      beer =>
        beer.name.toLowerCase().includes(search) ||
        beer.tagline.toLowerCase().includes(search)
    );
    this.setState({
      search: e.currentTarget.value,
      searchResults: results
    });
  }

  render() {
    return (
      <>
        <div className="search">
          <input
            type="text"
            value={this.state.search}
            onChange={this.search.bind(this)}
            placeholder="Search for beers..."
          />
        </div>
        <div className="Beers">
          {this.state.searchResults &&
            this.state.searchResults.map(beer => {
              return <BeerItem beer={beer} key={beer._id} />;
            })}
        </div>
      </>
    );
  }
}

export default Beers;
