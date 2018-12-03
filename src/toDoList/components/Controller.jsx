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
        tasks: [{ id: 0, task: "Do It", crossed: false, index: 0 }]
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
    const name = {
      id: idGenerator(),
      name: this.state.name,
      tasks: [],
      isWinner: false,
      doneTasks: 0
    };
    this.setState({ users: [...this.state.users, name], name: "" });
  };
  activeTabAndUserNow = id => {
    this.setState({ activeUserId: id });
  };
  handleTaskChange = event => {
    this.setState({ task: event.target.value });
  };

  handleSubmitTask = () => {
    let task = {
      task: this.state.task,
      id: idGenerator(),
      crossed: false
    };
    this.setState(state => {
      const users = state.users.map(user => {
        if (state.activeUserId === user.id) {
          return {
            ...user,
            tasks: [...user.tasks, task]
          };
        }
        return user;
      });
      return { users };
    });
    this.setState({ task: "" });
  };
  doneTask = indexOfTask => {
    this.setState({
      users: this.state.users.map(user => {
        user.tasks = user.tasks.map(task => {
          if (task.id === indexOfTask) {
            return {
              ...task,
              crossed: !task.crossed
            };
          } else {
            return task;
          }
        });
        return user;
      })
    });
  };
  getSortTasks = users => {
    const userAppdate = users
      .map(user => {
        const newUser = { id: user.id, name: user.name, doneTasks: 0 };
        user.tasks.forEach(task => {
          if (task.crossed) {
            newUser.doneTasks++;
          }
        });
        return newUser;
      })
      .filter(user => user.doneTasks);
    if (userAppdate.length === 1) {
      return userAppdate;
    } else if (userAppdate.length > 1) {
      const sortUsers = userAppdate.sort((a, b) => b.doneTasks - a.doneTasks);
      return sortUsers;
    }
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
