import React, { Component } from "react";
import Country from "./components/Country";
import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { Route } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Route
          exact
          path="/"
          render={() => (
            <div className="main">
              <div className="actions">
                <Search />
                <Dropdown />
              </div>
              <div className="countries">
                <Country />
                <Country />
                <Country />
                <Country />
                <Country />
                <Country />
              </div>
            </div>
          )}
        />
        <Route exact path="/country" render={() => <CountryDetails />} />
      </div>
    );
  }
}

export default App;
