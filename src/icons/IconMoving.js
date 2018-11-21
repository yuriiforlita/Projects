import React, { Component } from "react";
import Imgs from "./Components/Imgs.js";
import Choose from "./Components/Choose.js";
import MChanging from "./Components/MChanging.js";
import Json from "./imgJson.json";

class IconMoving extends Component {
  state = {
    arrImg: [],
    active: +"",
    first: "",
    sec: ""
  };

  componentDidMount() {
    this.setState({
      arrImg: Json
    });
    document.body.addEventListener("keydown", this.onKeyPress);
  }
  handleChange = event => {
    this.setState({ activeVal: event.target.value });
  };

  firstChange = event => {
    this.setState({
      firstCode: event.keyCode
    });
  };

  secondChange = event => {
    this.setState({
      secCode: event.keyCode
    });
  };
  buttonSubmit = event => {
    let first = this.state.firstCode;
    let sec = this.state.secCode;
    this.setState({
      first: first,
      sec: sec
    });
    event.preventDefault();
  };

  handleSubmit = event => {
    let activeId = +this.state.activeVal;
    this.setState({
      active: activeId
    });

    event.preventDefault();
  };
  onKeyPress = e => {
    let id = this.state.active;
    if (e.keyCode === 37 || this.state.firstCode === e.keyCode) {
      if (id === 0) {
      } else {
        this.setState({
          active: id - 1
        });
      }
    }
    if (e.keyCode === 39 || e.keyCode === this.state.secCode) {
      if (id === this.state.arrImg.length - 1) {
      } else {
        this.setState({
          active: id + 1
        });
      }
    }
    console.log(e.keyCode);
  };

  render() {
    console.log(this.state.first.keyCode);
    return (
      <div className="App">
        <MChanging
          firstChange={this.firstChange}
          secondChange={this.secondChange}
          buttonSubmit={this.buttonSubmit}
          values={this.state}
        />
        <Choose
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          length={this.state}
        />
        <Imgs items={this.state} />
      </div>
    );
  }
}

export default IconMoving;
