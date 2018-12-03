import React, { Fragment } from "react";
import "./style.css";

const TabTask = ({
  currentUserTasks,
  doneTask,
  allTasksLength,
  doneTasksLength
}) => {
  const filtered = currentUserTasks.tasks.map((item, id) => (
    <div
      className="tab-pane fade show active text-center"
      id={item.idName}
      role="tabpanel"
      aria-labelledby="nav-home-tab"
      key={id}
    >
      <h3
        onClick={() => doneTask(item.id)}
        className={item.crossed ? "crossed" : ""}
      >
        {item.task}
      </h3>
    </div>
  ));
  return (
    <Fragment>
      <h2>
        {currentUserTasks.name} tasks:({allTasksLength.length}/
        {doneTasksLength.length})
      </h2>
      {filtered}
    </Fragment>
  );
};
export default TabTask;
