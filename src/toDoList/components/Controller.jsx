import React, { Component } from "react";
import AddName from "./AddName";
import AddTask from "./AddTask";
import TaskBar from "./TaskBar";
import Winner from "./Winner";
import idGenerator from "react-id-generator";

export default class Controller extends Component {
  state = {
    users: [
      {
        name: "igor",
        id: 0,
        doneTasks: 0,
        tasks: [{ id: 0, task: "Do It", crossed: false }]
      }
    ],
    activeUserId: 0,
    name: "",
    task: ""
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };
  handleSubmitName = event => {
    event.preventDefault();
    if (this.state.name === "") {
    } else {
      const name = {
        id: idGenerator(),
        name: this.state.name,
        tasks: [],
        doneTasks: 0
      };
      this.setState({ users: [...this.state.users, name], name: "" });
    }
  };
  activeTabAndUserNow = id => {
    this.setState({ activeUserId: id });
  };
  handleTaskChange = event => {
    this.setState({ task: event.target.value });
  };

  handleSubmitTask = () => {
    if (this.state.task === "") {
    } else {
      let task = {
        task: this.state.task,
        id: idGenerator(),
        crossed: false
      };
      const users = this.state.users.map(user => {
        if (this.state.activeUserId === user.id) {
          return {
            ...user,
            tasks: [...user.tasks, task]
          };
        }
        return user;
      });
      this.setState({ users, task: "" });
    }
  };
  doneTask = indexOfTask => {
    const users = this.state.users.map(user => {
      user.tasks = user.tasks.map(task => {
        if (task.id === indexOfTask) {
          const currentCrossed = !task.crossed;
          user.doneTasks = currentCrossed
            ? user.doneTasks + 1
            : user.doneTasks - 1;
          return {
            ...task,
            crossed: currentCrossed
          };
        } else {
          return task;
        }
      });
      return user;
    });
    users.forEach(user => {
      user.tasks.forEach(task => {
        if (task.crossed) {
          this.setState({ doneTasks: task.doneTasks++ });
        } else if (!task.crossed) {
          this.setState({ doneTasks: task.doneTasks-- });
        }
      });
    });
    this.setState({
      users
    });
  };
  getSortTasks = users => {
    const newUsers = [];
    users.forEach(user => newUsers.push(user));
    console.log(newUsers);
    if (newUsers.length > 1) {
      const sortUsers = newUsers.sort((a, b) => b.doneTasks - a.doneTasks);
      return sortUsers;
    }
    return newUsers;
  };
  getUsersTask = id => {
    const currentUser = this.state.users.filter(user => user.id === id);
    const userObject = currentUser[0];
    return userObject;
  };
  allTasksLength = user => {
    const filtered = user.tasks.filter(item => item.crossed !== true);
    return filtered;
  };
  doneTasksLength = user => {
    const filteredDoneTasks = user.tasks.filter(item => item.crossed === true);
    return filteredDoneTasks;
  };
  getWinnerUsers = users => {
    if (typeof users === "undefined") {
      return [];
    } else if (users.length === 1) {
      return users;
    } else if (users.length > 1) {
      let usersWinner = users.filter(
        user => users[0].doneTasks === user.doneTasks
      );
      return usersWinner;
    }
  };

  render() {
    console.log(this.state.users);
    const currentUserTasks = this.getUsersTask(this.state.activeUserId);
    const allTasksLength = this.allTasksLength(currentUserTasks);
    const doneTasksLength = this.doneTasksLength(currentUserTasks);
    const getSortTasks = this.getSortTasks(this.state.users);
    const getWinnerUsers = this.getWinnerUsers(getSortTasks);
    return (
      <div>
        <AddName
          handleNameChange={this.handleNameChange}
          handleSubmitName={this.handleSubmitName}
          nameValue={this.state.name}
        />
        <Winner getWinnerUsers={getWinnerUsers} />
        <TaskBar
          currentUserTasks={currentUserTasks}
          users={this.state.users}
          activeTabAndUserNow={this.activeTabAndUserNow}
          doneTask={this.doneTask}
          allTasksLength={allTasksLength}
          doneTasksLength={doneTasksLength}
        />
        <AddTask
          handleTaskChange={this.handleTaskChange}
          handleSubmitTask={this.handleSubmitTask}
          taskValue={this.state.task}
        />
      </div>
    );
  }
}
