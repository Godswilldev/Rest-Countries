import React, { Component } from "react";

class Search extends Component {
  handleSearch = (evt) => {
    const { value } = evt.target;
    this.props.getSearch(value);
  };
  render() {
    return (
      <form className="search">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country..."
          onChange={this.handleSearch}
          className="search__input"
        />
      </form>
    );
  }
}

export default Search;
