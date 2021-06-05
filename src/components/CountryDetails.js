import React, { Component } from "react";

class CountryDetails extends Component {
  render() {
    return (
      <div>
        <button>Back</button>
        <img src="" alt="country__img" />
        <h1>Country Name</h1>
        <p className="">
          Native Name: <span>Beige</span>
        </p>
        <p className="">
          Population: <span>378267390</span>
        </p>
        <p className="">
          Region: <span>Europe</span>
        </p>
        <p className="">
          Sub Region: <span>Berlin</span>
        </p>
        <p className="">
          Capital: <span>Berlin</span>
        </p>
        <p className="">
          Top Level domain: <span>De</span>
        </p>
        <p className="">
          Currencies: <span>Euro</span>
        </p>
        <p className="">
          Languages: <span>Berlin</span>
        </p>
        <p className="">
          Border Countries:
          <button>France</button>
          <button>Germany</button>
          <button>Nertherlands</button>
        </p>
      </div>
    );
  }
}

export default CountryDetails;
