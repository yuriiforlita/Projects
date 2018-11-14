import React, { Component } from "react";
import "./add.css";
class Add extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit} className="addMarg">
        <input
          type="text"
          className="inpAdd inp"
          value={this.props.valueChange}
          onChange={this.props.handleChange}
          placeholder="Name Surname Number"
          required
        />
        <button
          className="buttonAdd"
          type="submit"
          value="Submit"
          onClick={this.props.clearInp}
        >
          +
        </button>
      </form>
    );
  }
}

export default Add;
