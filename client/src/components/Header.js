import React, { Component } from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

class Header extends Component {
  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          Streamer
        </Link>
        <div className="right menu">
          <Link to="/streams/show" className="item">
            All Streams
          </Link>
          <GoogleAuth />
        </div>
      </div>
    );
  }
}

export default Header;
