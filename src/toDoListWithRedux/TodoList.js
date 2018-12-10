import React, { Component } from "react";
import { connect } from "react-redux";
import Controller from "./components/Controller";
class App extends Component {
  render() {
    return (
      <div className="ToDoWrapper">
        <Controller />
      </div>
    );
  }
}

export default connect(
  state => ({ testStore: state })
)(App);
