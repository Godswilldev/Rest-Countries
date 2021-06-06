import React, { Component } from "react";
import Country from "./components/Country";
import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { Route } from "react-router-dom";
import axios from "axios";
import uuid from "uuid/v4";
import CountryDetails from "./components/CountryDetails";

class App extends Component {
  state = {
    allCountries: [],
    search: "",
  };

  async componentDidMount() {
    console.log("inside componendDidMount");
    try {
      const { data } = await axios.get("https://restcountries.eu/rest/v2/all");
      this.setState({
        allCountries: data,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  getSearch = (query) => this.setState({ search: query.trim() });

  render() {
    const { allCountries, search } = this.state;
    const filteredCountries = allCountries.filter(
      (country) =>
        country.name.toLowerCase().includes(search.toLowerCase()) ||
        country.capital.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="app">
        <Navbar />
        <Route
          exact
          path="/"
          render={() => (
            <div className="main">
              <div className="actions">
                <Search getSearch={this.getSearch} />
                <Dropdown />
              </div>
              <div className="countries">
                {filteredCountries.map((country) => (
                  <Country
                    key={uuid()}
                    name={country.name}
                    img={country.flag}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                  />
                ))}
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
