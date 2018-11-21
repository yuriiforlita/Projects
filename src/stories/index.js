import React from "react";

import { storiesOf } from "@storybook/react";
import App from "../phoneapp/src/App";
import SecondApp from "../icons/src/App";
import ThirdApp from "../gitHubTask/src/App";

storiesOf("My Apps/Tasks", module).add("Phone Task", () => <App />).add("Icon Task", () => <SecondApp />).add("gitHubTask", () => <ThirdApp />)
