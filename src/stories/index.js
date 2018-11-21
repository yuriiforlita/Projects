import React from "react";

import { storiesOf } from "@storybook/react";
import App from "../phoneapp/App";
import SecondApp from "../icons/App";
import GitHubRequests from "../gitHubTask/GitHubRequests";

storiesOf("My Apps/Tasks", module).add("Phone Task", () => <App />).add("Icon Task", () => <SecondApp />).add("gitHubTask", () => <GitHubRequests />)
