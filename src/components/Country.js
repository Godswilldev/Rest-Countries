import React, { Component } from "react";

class Country extends Component {
  render() {
    return (
      <div className="country">
        <div className="country__image">
          <img
            src={this.props.img}
            alt="Europe"
            className="country__image--img"
          />
        </div>
        <div className="country__info">
          <h1 className="country__info--name">{this.props.name}</h1>
          <p className="country__info--population">
            Population: <span>{this.props.population}</span>
          </p>
          <p className="country__info--region">
            Region: <span>{this.props.region}</span>
          </p>
          <p className="country__info--capital">
            Capital: <span>{this.props.capital}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Country;
