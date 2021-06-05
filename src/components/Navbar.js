import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link exact to="/">
          <h1>Where in the world ?</h1>
        </Link>

        <h2>Dark Mode</h2>
      </div>
    );
  }
}

export default Navbar;
