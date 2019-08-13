import React, { Component } from "react";
import Auth from "../utils/Auth";
const auth = new Auth();
import "./Nav.css";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBeer,
  faSignOutAlt,
  faSignInAlt,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";

export class Nav extends Component {
  logout() {
    auth
      .logout()
      .then(() => {
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  render() {
    return (
      <nav>
        <div>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </div>
        {auth.loggedIn() ? (
          <div>
            <Link to="/beers">
              <FontAwesomeIcon icon={faBeer} />
            </Link>
            <Link to="#" onClick={this.logout.bind(this)}>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/beers">
              <FontAwesomeIcon icon={faBeer} />
            </Link>
            <Link to="/login">
              <FontAwesomeIcon icon={faSignInAlt} />
            </Link>
            <Link to="/signup">
              <FontAwesomeIcon icon={faUserPlus} />
            </Link>
          </div>
        )}
      </nav>
    );
  }
}

export default withRouter(Nav);
