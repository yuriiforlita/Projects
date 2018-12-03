import React, { Component } from "react";

export default class AddTask extends Component {
  render() {
    return (
      <div className="input-group mb-3 container w-50">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Task Name..."
          onChange={this.props.handleTaskChange}
          value={this.props.taskValue}
          required
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={this.props.handleSubmitTask}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}
