import React, { Component } from "react";

class Country extends Component {
  render() {
    return (
      <div className="country">
        <div className="country__image">
          <img src="" alt="Europe" className="country__image--img" />
        </div>
        <div className="country__info">
          <h1 className="country__info--name">Country Name</h1>
          <p className="country__info--population">
            Population: <span>238838</span>
          </p>
          <p className="country__info--region">
            Region: <span>Europe</span>
          </p>
          <p className="country__info--capital">
            Capital: <span>Berlin</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Country;
