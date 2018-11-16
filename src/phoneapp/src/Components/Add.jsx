import React, { Component } from "react";
import "./add.css";

const Add = ({ valueChange, clearInp, handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit} className="addMarg">
      <input
        type="text"
        className="inp"
        value={valueChange}
        onChange={handleChange}
        placeholder="Name Surname Number"
        required
      />
      <button
        className="add_butt"
        type="submit"
        value="Submit"
        onClick={clearInp}
      >
        +
      </button>
    </form>
  );
};

export default Add;
