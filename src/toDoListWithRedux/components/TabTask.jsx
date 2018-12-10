import React, { Fragment } from "react";
import "./style.css";

const TabTask = ({ tasksPerUser, doneTask }) => {
  console.log(tasksPerUser);
  const filtered =
    tasksPerUser.tasks.length === 0
      ? "No tasks ..."
      : tasksPerUser.tasks.map((task, index) => (
          <div
            className="tab-pane fade show active text-center"
            id={task.idName}
            role="tabpanel"
            aria-labelledby="nav-home-tab"
            key={index}
          >
            <div className="d-flex flex-row justify-content-around w-100 align-items-center justify-content-center">
              <div className="w-50 d-flex align-items-center timeLeft justify-content-center ">
                {task.time}
              </div>
              <div className="w-50 d-flex align-items-center justify-content-center taskRight clearfix">
                <p
                  className={task.crossed ? "crossed taskWrap" : "taskWrap"}
                  onClick={event => {
                    event.preventDefault();
                    doneTask(task.id, tasksPerUser.id);
                  }}
                >
                  {task.task}
                </p>
              </div>
            </div>
          </div>
        ));

  return <Fragment>{filtered}</Fragment>;
};

export default TabTask;
