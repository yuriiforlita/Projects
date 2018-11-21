import React from "react";

import { storiesOf } from "@storybook/react";
import App from "../phoneapp/src/App";
import SecondApp from "../icons/src/App";
import thirdApp from "../gitHubTask/src/App";

storiesOf("My Apps", module).add("Phone Task", () => <App />).add("Icon Task", () => <SecondApp />).add("Icon Task", () => <thirdApp />)
