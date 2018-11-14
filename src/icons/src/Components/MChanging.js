import React, { Component } from "react";
import "./img.css";

class MChanging extends Component {
  render() {
    return (
      <div className="ImgWrapp">
        <form onSubmit={this.props.buttonSubmit}>
          <input onKeyDown={this.props.firstChange} />
          <input onKeyDown={this.props.secondChange} />
          <input type="submit" value="change control..." />
        </form>
      </div>
    );
  }
}

export default MChanging;
