import React, { Component } from "react";
import "./img.css";

class Imgs extends Component {
  render() {
    return (
      <div className="ImgWrapp">
        {this.props.items.arrImg.map(el => (
          <img
            alt="icon"
            className={this.props.items.active === el.id ? "imgBorder" : ""}
            key={el.id}
            src={el.src}
          />
        ))}
      </div>
    );
  }
}

export default Imgs;
