import React, { Component } from "react";
import "./img.css";

class Choose extends Component {
  render() {
    return (
      <div className="ImgWrapp">
        <form onSubmit={this.props.handleSubmit}>
          <input
            onChange={this.props.handleChange}
            type="number"
            min="0"
            max={this.props.length.arrImg.length - 1}
          />
          <input type="submit" value="change index..." />
        </form>
      </div>
    );
  }
}

export default Choose;
