import React, { Component } from "react";
import idGenerator from "react-id-generator";
import Add from "./Components/Add";
import List from "./Components/List";
import Search from "./Components/Search";
import "./App.css";

class App extends Component {
  state = {
    text: "",
    value: [],
    search: "",
    active: false,
    statusF: 1,
    statusS: -1
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState(state => {
      let spl = this.state.text.split(" ");
      let initials = {
        id: idGenerator("0"),
        name: spl[0].toLowerCase(),
        surname: spl[1].toLowerCase(),
        phone: spl[2]
      };
      state.value.push(initials);
      return state;
    });
    this.setState({
      text: ""
    });
  };
  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  searchChange = event => {
    this.setState({
      search: event.target.value.toLowerCase()
    });
  };
  toggleButt = e => {
    e.preventDefault();
    let currentState = this.state.active;
    let changeF = this.state.statusF === 1 ? -1 : 1;
    let changeS = this.state.statusS === -1 ? 1 : -1;
    this.setState({
      active: !currentState,
      statusF: changeF,
      statusS: changeS
    });
  };
  deleleCont = index => {
    let newArr = this.state.value.filter(el => el.id !== index);
    this.setState({
      value: newArr
    });
  };

  render() {
    return (
      <div className="App">
        <div className="iphone-top">
          <span className="speaker" />
          <div className="iphone-screen">
            <h1>PhoneBook</h1>
            <Search
              search={this.searchChange}
              change={this.toggleButt}
              symbolChg={this.state.active}
            />
            <List values={this.state} deleteIt={this.deleleCont} />
            <Add
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              valueChange={this.state.text}
              clearInp={this.clearInp}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
