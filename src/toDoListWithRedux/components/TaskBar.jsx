import React, { PureComponent, Fragment } from "react";
import TabTask from "./TabTask";
import TabName from "./TabName";

class TaskBar extends PureComponent {
  render() {
    return (
      <Fragment>
        <nav className="container">
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <TabName
              users={this.props.users}
              currentTab={this.props.currentTab}
            />
          </div>
        </nav>
        <div id="nav-tabContent" className="tab-content container">
          <TabTask
            tasksPerUser={this.props.tasksPerUser}
            doneTask={this.props.doneTask}
            allTasksPerUser={this.props.allTasksPerUser}
            doneTasksPerUser={this.props.doneTasksPerUser}
          />
        </div>
      </Fragment>
    );
  }
}
export default TaskBar;
