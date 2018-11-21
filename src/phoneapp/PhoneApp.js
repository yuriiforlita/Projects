import React, { Component } from "react";
import idGenerator from "react-id-generator";
import Add from "./Components/Add";
import List from "./Components/List";
import Search from "./Components/Search";
import "./PhoneApp.css";

class PhoneApp extends Component {
  state = {
    text: "",
    value: [],
    search: "",
    active: true
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
    this.setState(({ active }) => ({
      active: !active
    }));
  };
  delNumb = index => {
    let filterConts = this.state.value.filter(el => el.id !== index);
    this.setState({
      value: filterConts
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
            <List values={this.state} deleteIt={this.delNumb} />
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

export default PhoneApp;
