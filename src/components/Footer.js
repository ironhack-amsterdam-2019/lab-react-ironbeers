import React, { Component } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <span>
          Ironhack <FontAwesomeIcon icon={faRocket} />
        </span>
        <span>Prost!</span>
      </footer>
    );
  }
}

export default Footer;
