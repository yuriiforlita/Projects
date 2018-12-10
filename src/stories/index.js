import React from "react";

import { storiesOf } from "@storybook/react";
import PhoneApp from "../phoneapp/PhoneApp";
import IconMoving from "../icons/IconMoving";
import GitHubRequests from "../gitHubTask/GitHubRequests";
import TodoList from "../toDoList/TodoList";
import TodoListRedux from "../toDoListWithRedux/TodoList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "../toDoListWithRedux/reducers";
const store = createStore(rootReducer);

storiesOf("My Apps/Tasks", module).add("Phone Task", () => <PhoneApp />).add("Icon Task", () => <IconMoving />).add("gitHubTask", () => <GitHubRequests />).add("TodoList", () => <TodoList />).add("TodoListRedux", () => <Provider store={store}><TodoListRedux /></Provider>)
