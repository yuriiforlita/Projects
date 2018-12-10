import React, { Component } from "react";
import AddName from "./AddName";
import AddTask from "./AddTask";
import TaskBar from "./TaskBar";
import { connect } from "react-redux";
import { currentTab } from "../actions";
import { doneTask } from "../actions";
import { doneTasksPerUser } from "../reducers/selectors";
import { allTasksPerUser } from "../reducers/selectors";
import { sortedUsersPerDoneTask } from "../reducers/selectors";
import { tasksPerUser } from "../reducers/selectors";
import { getWinnerUsers } from "../reducers/selectors";
import "./style.css";

class Controller extends Component {
  render() {
    return (
      <div className="wrapper">
        <AddName
          tasksPerUser={this.props.tasksPerUser}
          allTasksPerUser={this.props.allTasksPerUser}
          doneTasksPerUser={this.props.doneTasksPerUser}
        />
        <TaskBar
          tasksPerUser={this.props.tasksPerUser}
          doneTask={this.props.doneTask}
          users={this.props.users}
          currentTab={this.props.currentTab}
        />
        <AddTask getWinnerUsers={this.props.getWinnerUsers} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  const tasksForCurrentUser = tasksPerUser(state);
  const sortedUsers = sortedUsersPerDoneTask(state);
  return {
    users: state.todos.users,
    tasksPerUser: tasksPerUser(state),
    allTasksPerUser: allTasksPerUser(tasksForCurrentUser),
    doneTasksPerUser: doneTasksPerUser(tasksForCurrentUser),
    sortedUsersPerDoneTask: sortedUsersPerDoneTask(state),
    getWinnerUsers: getWinnerUsers(sortedUsers)
  };
}

export default connect(
  mapStateToProps,
  { currentTab, doneTask }
)(Controller);
