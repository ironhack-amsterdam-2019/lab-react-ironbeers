import React, { Component } from "react";
import axios from "axios";
import "./form.css";
var qs = require("querystring");

export class NewBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: {}
    };
  }

  submit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      data: qs.stringify(this.state.beer),
      url: process.env.API_BASE_URL + "/beers/new",
      config: { headers: { "Content-Type": "multipart/form-data" } }
    })
      .then(response => {
        this.props.history.push("/beer/" + response.data._id);
      })
      .catch(error => {
        console.log(error);
      });
  }

  update(e) {
    let input = e.currentTarget;
    this.state.beer[input.name] = input.value;
  }

  render() {
    return (
      <form onSubmit={this.submit.bind(this)}>
        <input
          required
          autoFocus
          type="text"
          name="name"
          placeholder="Beer name"
          onChange={this.update.bind(this)}
        />
        <input
          required
          type="text"
          name="tagline"
          placeholder="Tagline"
          onChange={this.update.bind(this)}
        />
        <textarea
          required
          rows="5"
          type="text"
          name="description"
          placeholder="Description"
          onChange={this.update.bind(this)}
        />
        <input
          required
          type="text"
          name="first_brewed"
          placeholder="First brewed"
          onChange={this.update.bind(this)}
        />
        <input
          required
          type="text"
          name="brewers_tips"
          placeholder="Brewers tips"
          onChange={this.update.bind(this)}
        />
        <input
          required
          type="number"
          name="attenuation_level"
          placeholder="0"
          onChange={this.update.bind(this)}
        />
        <input
          required
          type="text"
          name="contributed_by"
          placeholder="Your name"
          onChange={this.update.bind(this)}
        />
        <input type="submit" value="Create Beer" />
      </form>
    );
  }
}

export default NewBeer;
