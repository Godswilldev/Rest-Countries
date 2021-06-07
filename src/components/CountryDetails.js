import React, { Component } from "react";
import { Link } from "react-router-dom";

class CountryDetails extends Component {
  render() {
    const { country } = this.props;
    // const country = this.props.countries.find(
    //   (country) => country.name.toLowerCase() === countryName.toLowerCase()
    // );
    return (
      <div>
        <button>Back</button>
        <img src={country.flag} alt="country__img" />
        <h1>{country.name}</h1>
        <p className="">
          Native Name: <span>{country.nativeName}</span>
        </p>
        <p className="">
          Population: <span>{country.population}</span>
        </p>
        <p className="">
          Region: <span>{country.region}</span>
        </p>
        <p className="">
          Sub Region: <span>{country.subregion}</span>
        </p>
        <p className="">
          Capital: <span>{country.capital}</span>
        </p>
        <p className="">
          Top Level domain: <span>{country.topLevelDomain}</span>
        </p>
        <p className="">
          Currencies:
          {country.currencies.map((currency, idx) => (
            <span key={idx}>
              {currency.symbol} {currency.name}
            </span>
          ))}
        </p>
        <p className="">
          Languages:
          {country.languages.map((language, idx) => (
            <span key={idx}>{language.name}</span>
          ))}
        </p>
        {/* <p className="">
          Border Countries:
          {country.borders.map((border, idx) => (
            <Link
              key={idx}
              to={`/country/${this.props.countries.find(
                (con) => con.alpha3code === border
              )}`}
            >
              <button>{border}</button>
            </Link>
          ))}
        </p> */}
      </div>
    );
  }
}

export default CountryDetails;
