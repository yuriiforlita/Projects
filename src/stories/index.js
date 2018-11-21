import React from "react";

import { storiesOf } from "@storybook/react";
import PhoneApp from "../phoneapp/PhoneApp";
import IconMoving from "../icons/IconMoving";
import GitHubRequests from "../gitHubTask/GitHubRequests";

storiesOf("My Apps/Tasks", module).add("Phone Task", () => <PhoneApp />).add("Icon Task", () => <IconMoving />).add("gitHubTask", () => <GitHubRequests />)
