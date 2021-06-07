import React, { Component } from "react";
import Country from "./components/Country";
import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { Route, Switch, Link } from "react-router-dom";
import axios from "axios";
import uuid from "uuid/v4";
import CountryDetails from "./components/CountryDetails";

class App extends Component {
  state = {
    allCountries: [],
    search: "",
    region: "",
  };

  //request to get and display all countries
  async componentDidMount() {
    try {
      const { data } = await axios.get("https://restcountries.eu/rest/v2/all");
      this.setState({
        allCountries: data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  ///// get search query
  getSearch = (query) => this.setState({ search: query.trim() });

  //// get region and make another request based off the region, then setstate to render the countries in that region
  getRegion = async (region) => {
    await this.setState({ region: region.toLowerCase() });

    if (region === "all") {
      try {
        const { data } = await axios.get(
          "https://restcountries.eu/rest/v2/all"
        );
        this.setState({
          allCountries: data,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const { data } = await axios.get(
          `https://restcountries.eu/rest/v2/region/${this.state.region}`
        );
        let countryRegions = this.state.allCountries.slice();
        countryRegions = data;
        this.setState({ allCountries: countryRegions });
      } catch (error) {
        console.log(error);
      }
    }
  };

  render() {
    //Live search filter functionality, to filter out the countries based on the search input
    const { allCountries, search } = this.state;
    let filteredCountries = allCountries
      .slice()
      .filter(
        (country) =>
          country.name.toLowerCase().includes(search.toLowerCase()) ||
          country.capital.toLowerCase().includes(search.toLowerCase())
      );
    const getCountry = (routeProps) => {
      const { countryName } = routeProps.match.params;
      const country = this.state.allCountries.find(
        (country) => country.name.toLowerCase() === countryName.toLowerCase()
      );
      return <CountryDetails {...routeProps} country={country} />;
    };

    return (
      <div className="app">
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div className="main">
                <div className="actions">
                  <Search getSearch={this.getSearch} />
                  <Dropdown getRegion={this.getRegion} />
                </div>
                <div className="countries">
                  {filteredCountries.map((country) => (
                    <Link key={uuid()} exact to={`/country/${country.name}`}>
                      <Country
                        name={country.name}
                        img={country.flag}
                        population={country.population}
                        region={country.region}
                        capital={country.capital}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          />
          <Route exact path="/country/:countryName" render={getCountry} />
          <Route render={() => <h1>Error 404 not found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
