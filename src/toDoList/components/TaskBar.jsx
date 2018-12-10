import React, { PureComponent, Fragment } from "react";
import TabTask from "./TabTask";
import TabName from "./TabName";

export default class TaskBar extends PureComponent {
  render() {
    return (
      <Fragment>
        <nav className="container w-50">
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <TabName
              users={this.props.users}
              activeTabAndUserNow={this.props.activeTabAndUserNow}
            />
          </div>
        </nav>
        <div id="nav-tabContent" className="tab-content container w-50">
          <TabTask
            currentUserTasks={this.props.currentUserTasks}
            doneTask={this.props.doneTask}
            allTasksLength={this.props.allTasksLength}
            doneTasksLength={this.props.doneTasksLength}
          />
        </div>
      </Fragment>
    );
  }
}
