import React, { Component } from "react";
import "./add.css";

class Search extends Component {
  render() {
    return (
      <form className="search">
        <input
          className="inp"
          type="text"
          placeholder="Search..."
          onChange={this.props.search}
        />
        <button className="sort" onClick={this.props.change}>
          {this.props.symbolChg ? "⇑" : "⇓"}
        </button>
      </form>
    );
  }
}

export default Search;
