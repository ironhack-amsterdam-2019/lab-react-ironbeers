import React, { Component } from "react";
import Auth from "../utils/Auth";
const auth = new Auth();
import "./form.css"

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  submit(e) {
    e.preventDefault();
    auth
      .signup(this.state.user)
      .then(() => {
        this.setState({ error: "" });
        this.props.history.push("/");
      })
      .catch(({ response }) => {
        this.setState({ error: response.data.message });
      });
  }

  update(e) {
    let input = e.currentTarget;
    let user = {...this.state.user}
    user[input.name] = input.value;
    this.setState({user: user})
  }

  render() {
    return (
      <form onSubmit={this.submit.bind(this)}>
        <input
          required
          autoFocus
          type="text"
          name="username"
          placeholder="Username"
          onChange={this.update.bind(this)}
        />
        <input
          required
          type="text"
          name="firstname"
          placeholder="First name"
          onChange={this.update.bind(this)}
        />
        <input
          required
          type="text"
          name="lastname"
          placeholder="Last name"
          onChange={this.update.bind(this)}
        />
        <input
          required
          type="text"
          name="email"
          placeholder="E-mail"
          onChange={this.update.bind(this)}
        />
        <input
          required
          type="password"
          name="password"
          placeholder="Password"
          onChange={this.update.bind(this)}
        />
        <input type="submit" value="Sign up" />
      </form>
    );
  }
}

export default Signup;
