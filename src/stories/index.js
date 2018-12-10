import React from "react";

import { storiesOf } from "@storybook/react";
import PhoneApp from "../phoneapp/PhoneApp";
import IconMoving from "../icons/IconMoving";
import GitHubRequests from "../gitHubTask/GitHubRequests";
import TodoList from "../toDoList/TodoList";
import 'bootstrap/dist/css/bootstrap.min.css';

storiesOf("My Apps/Tasks", module).add("Phone Task", () => <PhoneApp />).add("Icon Task", () => <IconMoving />).add("gitHubTask", () => <GitHubRequests />).add("TodoList", () => <TodoList />)
