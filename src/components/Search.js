import React, { Component } from "react";

class Search extends Component {
  state = {
    search: "",
  };
  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <form className="search">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country..."
          onChange={this.handleChange}
          value={this.state.search}
          className="search__input"
        />
      </form>
    );
  }
}

export default Search;
