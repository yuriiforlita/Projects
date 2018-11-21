import React from "react";
import "./style.css";

const SearchUser = ({ handleChange, handleSubmit }) => (
  <form className="search_wrapper" onSubmit={handleSubmit}>
    <input onChange={handleChange} className="search_field" type="text" />
    <button className="search_butt" type="submit">
      Search..
    </button>
  </form>
);

export default SearchUser;
